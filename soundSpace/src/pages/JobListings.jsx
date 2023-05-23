/* import React from 'react' */
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JobForm from "../components/JobForm";
import { useState, useEffect, useContext } from "react";
import { SessionContext } from "../contexts/SessionContext";

function JobListings() {
  const [isTabOpen, setIsTabOpen] = useState(false);
  const { token } = useContext(SessionContext);

  const handleButtonClick = () => {
    setIsTabOpen(!isTabOpen);
  };

  const [jobs, setJobs] = useState([])

  const fetchJobs = async () => {
    try {
        const allJobs = await fetch(`${import.meta.env.VITE_BASE_API_URL}/api/jobs`)
        if(allJobs.status === 200) {
            const parsed = await allJobs.json()
            setJobs(parsed)
        }
    } catch (error) {
        console.error(error)
    }
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  /* const handleDelete = async (jobId) => {
    try {
        const deleteJob = await fetch(`${import.meta.env.VITE_BASE_API_URL}/api/jobs/${jobId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
        });
        if(deleteJob.status === 200) {
            setJobs(jobs.filter(job => job._id !== jobId));
        } 
    } catch (error) {
        console.error(error);
    }
  } */

  return (
    <div>
      <Navbar />
      <div>
        <button onClick={handleButtonClick}>Create a New Job</button>
        <div className={`tab-content ${isTabOpen ? "open" : ""}`}>
          <JobForm />
        </div>
      </div>
      <>
      <h2>Job Listings</h2>
      {jobs.map(job => (
        <div key={job._id}>
        <h2>{job.title}</h2>
        <h3>{job.location}</h3>
        <p>{job.jobType}</p>
        <p>{job.description}</p>
        <button>edit</button>
        {/* <button onClick={handleDelete}>delete</button> */}
        </div>
      ))}
    </>
      
      <Footer />
    </div>
  );
}

export default JobListings;
