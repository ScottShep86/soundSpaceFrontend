/* import React from 'react' */
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JobForm from "../components/JobForm";
import { useState, useEffect } from "react";

function JobListings() {
  const [isTabOpen, setIsTabOpen] = useState(false);

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

  return (
    <div>
      <Navbar />
      JobListings
      <div>
        <button onClick={handleButtonClick}>Create a New Job</button>
        <div className={`tab-content ${isTabOpen ? "open" : ""}`}>
          <JobForm />
        </div>
      </div>
      <>
      <h2>Job Listings</h2>
      {jobs.map(job => (
        <h2 key={job._id}>{job.title}</h2> 
      ))}
    </>
      
      <Footer />
    </div>
  );
}

export default JobListings;
