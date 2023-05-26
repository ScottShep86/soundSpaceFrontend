/* import React from 'react' */
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
/* import { SessionContext } from "../contexts/SessionContext"; */

function JobListings() {
  /* const { token } = useContext(SessionContext); */

 

  const [jobs, setJobs] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  /* const fetchJobs = async () => {
    try {
        const allJobs = await fetch(`${import.meta.env.VITE_BASE_API_URL}/api/jobs`)
        if(allJobs.status === 200) {
            const parsed = await allJobs.json()
            setJobs(parsed)
        }
    } catch (error) {
        console.error(error)
    }
  } */

  const fetchJobs = async (searchTerm = "") => {
    try {
      let endpoint = `${import.meta.env.VITE_BASE_API_URL}/api/jobs`
      if (searchTerm) {
        endpoint += `?`
    }
      if (searchTerm) {
        endpoint += `search=${searchTerm}`
    }
      const allJobs = await fetch(endpoint);
      if (allJobs.status === 200) {
        const parsed = await allJobs.json();
        setJobs(parsed);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchJobs()
  }, [])

  useEffect(() => {
    fetchJobs(searchTerm)
  }, [searchTerm])

  return (
    <div>
      <Navbar />
      <div className="pageView">
      <>
      <h2>Job Listings</h2>
      <div>
        <label>Search<input value={searchTerm} onChange={event => setSearchTerm(event.target.value) }/></label>
        </div>
      <br></br>
      <div className="allJobsListings">
      
      {jobs.map(job => (
        
        <Link className="link" key={job._id} to={`/jobs/${job._id}`}>
        <div className="jobPostsListings">
        <h3>{job.title}</h3>
        <h3>{job.location}</h3>
        <p>{job.jobType}</p>
        <br></br>
        </div>
        </Link>
        
      ))}
      </div>
     
    </>
    </div>
      <Footer />
      
    </div>
  );
}

export default JobListings;
