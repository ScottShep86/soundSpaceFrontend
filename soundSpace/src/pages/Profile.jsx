/* import React from 'react' */
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ProfilePic from "../assets/images/alexey-ruban-73o_FzZ5x-w-unsplash.png";
/* import CircularProgress from "@mui/material/CircularProgress"; */

function Profile() {
  /* const {isLoading} = useContext(SessionContext) */

  const [userProducer, setUserProducer] = useState([]);
  const [userJobs, setUserJobs] = useState([]);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [jobIdToDelete, setJobIdToDelete] = useState("");
  const [loading, setLoading] = useState(true);

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

  const getProfile = useCallback(async () => {
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
    } finally {
      setLoading(false);
    }
  }, []);

  const getMyJobs = useCallback(async () => {
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
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getMyJobs();
    getProfile();
    //resolve profile problem
  }, [getMyJobs, getProfile]);

  /* useEffect(() => {
}, [userJobs]) */

  const handleDelete = async (jobId) => {
    try {
      const localToken = localStorage.getItem("authToken");
      if (!localToken) return;
      await verifyToken(localToken);
      console.log(jobId);
      const response = await axios.delete(
        `${import.meta.env.VITE_BASE_API_URL}/profile/${jobId}/jobs`,
        {
          headers: {
            Authorization: `Bearer ${localToken}`,
          },
        }
      );
      if (response.status === 200) {
        setUserJobs(userJobs.filter((job) => job._id !== jobId));
      }
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteConfirmation = (jobId) => {
    setConfirmDelete(true);
    setJobIdToDelete(jobId);
  };

  const handleCancelDelete = () => {
    setConfirmDelete(false);
    setJobIdToDelete("");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="profileView">
        <div className="profileCard">
          <h1 className="profileName">{userProducer.name}</h1>
          <div className="imgInfoCard">
            <img
              className="profileImg"
              src={ProfilePic}
              alt="profile picture"
            />
            <div className="profileInfo">
              <p>
                <strong>CITY: </strong>
                {userProducer.location}
              </p>

              <p>
                <strong>GENRE: </strong>
                {userProducer.genre}
              </p>
              <br></br>
            </div>
          </div>
          <div className="bio">
            <p>
              <strong>ASSOCIATED ACTS: </strong>
              {userProducer.associatedActs}
            </p>
          </div>
          <br></br>
          <div className="bio">
            <p>
              <strong>ABOUT ME: </strong>
              {userProducer.aboutMe}
            </p>
          </div>
        </div>
        <div>
          <br></br>
          <Link className="profileBtn" to="/jobs/create">
            Create a Job
          </Link>
          <br></br>
        </div>
        <div>
          <h3>POSTED JOBS ({userJobs.length}) </h3>
          <div className="allJobsProfile">
            {userJobs.map((job) => {
              return (
                <>
                  <div className="jobPostsProfile">
                    <Link
                      className="link"
                      to={`/jobs/${job._id}`}
                      key={job._id}
                    >
                      <h3>{job.title}</h3>
                      <p>{job.description}</p>
                      <br></br>
                    </Link>
                    <div className="jobBtns">
                      <Link
                        className="editBtn"
                        to={{ pathname: `/profile/${job._id}/edit` }}
                      >
                        Edit Job
                      </Link>
                      {confirmDelete && jobIdToDelete === job._id ? (
                        <>
                          <button
                            className="editBtn"
                            onClick={handleCancelDelete}
                          >
                            Cancel
                          </button>
                          <button
                            className="deleteBtn"
                            onClick={() => handleDelete(job._id)}
                          >
                            Confirm
                          </button>
                        </>
                      ) : (
                        <button
                          className="deleteBtn"
                          onClick={() => handleDeleteConfirmation(job._id)}
                        >
                          Delete Job
                        </button>
                      )}
                    </div>
                    <br></br>
                  </div>
                  <br></br>
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