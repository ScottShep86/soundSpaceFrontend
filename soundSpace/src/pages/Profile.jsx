/* import React from 'react' */
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Review from "../components/Review";

function Profile() {
  const verifyToken = async (currentToken) => {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_API_URL}/auth/verify`,
      {
        headers: {
          Authorization: `Bearer ${currentToken}`,
        },
      }
    );
    if (response.status === 200) {
      const parsed = await response.json();
      return parsed;
    }
  };

  const [userProducer, setUserProducer] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const localToken = localStorage.getItem("authToken");
        if (!localToken) return;

        const something = await verifyToken(localToken);
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_API_URL}/profile/${
            something.producer._id
          }`,
          {
            headers: {
              Authorization: `Bearer ${localToken}`,
            },
          }
        );
        setUserProducer(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getProfile();
  }, []);

  return (
    <div>
      <Navbar />
      Profile this can be deleted later
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div>
        <div>
          <h3>{userProducer.name}</h3>
          <img src={userProducer.picture} alt="profile picture" />
          <p>City: {userProducer.location}</p>
          <p>Associated Acts: {userProducer.associatedActs}</p>
          <p>Bio: {userProducer.aboutMe}</p>
          <p>{userProducer.favoriteProducers}</p>
          <p>Genre: {userProducer.genre}</p>
          </div>
        </div>
      )}
      <Review />
      <Footer />
    </div>
  );
}

export default Profile;
