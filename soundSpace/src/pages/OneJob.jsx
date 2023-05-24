import { useParams } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Message from "../components/Message"
import {useEffect, useState} from 'react'
import { SessionContext } from "../contexts/SessionContext"

/* import React from 'react' */

function OneJob() {
    const {jobId} = useParams()
    const [job, setJob] = useState()
    const {token} = SessionContext

    const fetchJob = async () => {
        try {
                const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/api/jobs/${jobId}`, {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              );
            if (response.status === 200) {
                const parsed = await response.json()
                setJob(parsed)
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchJob()
    }, [])

    useEffect(() => {
        console.log(job)
      }, [job])

    return (
        <div>
          <Navbar />
          {job && (
            <>
              <h1>Job Details: {job.title}</h1>
              <h2>Location: {job.location}</h2>
              <h2>Job Type: {job.jobType}</h2>
              <h2>Description: {job.description}</h2>
              <h2>Contact Number: {job.contactNumber}</h2>
            </>
          )}
          <Message />
    <Footer />
    </div>
  );
} 

export default OneJob