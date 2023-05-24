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

  const [userProducer, setUserProducer] = useState([]);
  const [userJobs, setUserJobs] = useState([]);

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

  const getProfile = async () => {
    try {
      const localToken = localStorage.getItem("authToken");
      if (!localToken) return;

      const user = await verifyToken(localToken);
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_API_URL}/profile/${user.producer._id}`,
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
      if (!localToken) return;
      const user = await verifyToken(localToken);
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_API_URL}/profile/${
          user.producer._id
        }/jobs`,
        {
          headers: {
            Authorization: `Bearer ${localToken}`,
          },
        }
      );
      console.log("just response", response);
      setUserJobs(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getProfile();
    getMyJobs();
  }, []);

  /*  useEffect(() => {
}, [userJobs]) */

const handleDelete = async (jobId) => {
  try {
    const localToken = localStorage.getItem("authToken");
      if (!localToken) return;
      await verifyToken(localToken);
    console.log(jobId)
    const response = await axios.delete(`${import.meta.env.VITE_BASE_API_URL}/profile/${jobId}/jobs`, {
      headers: {
        Authorization: `Bearer ${localToken}`,
      },
    }
  );
    console.log(response)
  } catch (error) {
    console.error(error)
  }
} 

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
        <h3>My {userJobs.length} posted Jobs</h3>
        <div className="allJobs">
        {userJobs.map((job) => {
          return (
            <div key={job._id}>
              <h3>{job.title}</h3>
              <p>{job.description}</p>
              <Link to={`/profile/${job._id}/edit`}>Edit Job</Link>
              <button onClick={() => handleDelete(job._id)}>Delete Job</button>
            </div>
          );
        })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
