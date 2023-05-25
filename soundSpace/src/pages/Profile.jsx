/* import React from 'react' */
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ProfilePic from "../assets/images/alexey-ruban-73o_FzZ5x-w-unsplash.png"
/* import CircularProgress from "@mui/material/CircularProgress"; */

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
      setUserJobs(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getProfile();
    getMyJobs();
  }, []);

   /* useEffect(() => {
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
  if(response.status === 200) {
    setUserJobs(userJobs.filter((job) => job._id !== jobId));
  }
    console.log(response)
  } catch (error) {
    console.error(error)
  }
} 

  return (
    <div>
      <Navbar />
      <div className="profileView">
      <div className="profileCard">
        <h1 className="profileName">{userProducer.name}</h1>
        <div className="imgInfoCard">
        <img className="profileImg" src={ProfilePic} alt="profile picture" />
        <div className="profileInfo">
        <p>CITY: {userProducer.location}</p>
        <br></br>
        <p>GENRE: {userProducer.genre}</p>
        <br></br>
        <p>ASSOCIATED ACTS: {userProducer.associatedActs}</p>
        </div>
        </div>
        <div className="bio">
        <p>ABOUT ME: {userProducer.aboutMe}</p>
        </div>
      </div>
      <div>
      <br></br>
      <Link className="profileBtn" to="/jobs/create">Create a Job</Link>
      </div>
      <div>
        <h3>My {userJobs.length} posted Jobs</h3>
        <div className="allJobs">
        {userJobs.map((job) => {
          return (
                  <>
            <button className="deleteBtn" onClick={() => handleDelete(job._id)}>Delete Job</button>
                  <Link to={`/jobs/${job._id}`} key={job._id}>
              <h3>{job.title}</h3>
              <p>{job.description}</p>
              <div className="jobBtns">
              <Link className="editBtn" to={{pathname: `/profile/${job._id}/edit` }}>Edit Job</Link>
              
              </div>
            </Link>
 </>
          );
        })}
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
