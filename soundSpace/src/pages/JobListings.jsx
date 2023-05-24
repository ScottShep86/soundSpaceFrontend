/* import React from 'react' */
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
/* import { SessionContext } from "../contexts/SessionContext"; */

function JobListings() {
  /* const { token } = useContext(SessionContext); */

 

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
      <>
      <h2>Job Listings</h2>
      <div className="allJobs">
      {jobs.map(job => (
        <div key={job._id}>
        <h3>{job.title}</h3>
        <h3>{job.location}</h3>
        <p>{job.createdBy}</p>
        <p>{job.jobType}</p>
        <p>{job.description}</p>
        <p>{job.contactNumber}</p>
        <br></br>
        </div>
        
      ))}
      </div>
    </>
      
      <Footer />
    </div>
  );
}

export default JobListings;
