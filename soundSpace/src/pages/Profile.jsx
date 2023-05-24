/* import React from 'react' */
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
/* import CircularProgress from "@mui/material/CircularProgress";
import { SessionContext } from "../contexts/SessionContext"; */

function Profile() {

/* const {isLoading} = useContext(SessionContext) */

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
  const [userJobs, setUserJobs] = useState([]);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const localToken = localStorage.getItem("authToken");
        if (!localToken) return;

        const user = await verifyToken(localToken);
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_API_URL}/profile/${
            user.producer._id
          }`,
          {
            headers: {
              Authorization: `Bearer ${localToken}`,
            },
          }
        );
        setUserProducer(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const getMyJobs = async () => {
      try {
        const localToken = localStorage.getItem("authToken");
        if(!localToken) return;
        const user = await verifyToken(localToken);
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_API_URL}/profile/${user.producer._id}`,
          {
            headers: {
              Authorization: `Bearer ${localToken}`,
            },
          }
        );
        setUserJobs(response.data)
        console.log(userJobs)
      } catch (error) {
        console.error(error)
      }
    }
    getProfile();
    getMyJobs();
  }, []);

  return (
    <div>
      <Navbar />
      Profile this can be deleted later
        <div>
          <h3>{userProducer.name}</h3>
          <img src={userProducer.picture} alt="profile picture" />
          <p>City: {userProducer.location}</p>
          <p>Associated Acts: {userProducer.associatedActs}</p>
          <p>Bio: {userProducer.aboutMe}</p>
          <p>{userProducer.favoriteProducers}</p>
          <p>Genre: {userProducer.genre}</p>
  </div>
        <Link to="/jobs/create">Create a Job</Link>

      <div>
        <h3>My posted Jobs</h3>

      </div>

      <Footer />
    </div>
  );
}

export default Profile;