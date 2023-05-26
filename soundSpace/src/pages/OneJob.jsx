import { useParams } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Message from "../components/Message"
import {useEffect, useState} from 'react'
import { SessionContext } from "../contexts/SessionContext"

/* import React from 'react' */

function OneJob() {
    const {jobId} = useParams()
    const [job, setJob] = useState();
    const [messages, setMessages] = useState([])
    const [shouldCheckNew, setShouldCheckNew] = useState(1)
    const [users, setUsers] = useState([])
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

    const fetchMessages = async () => {
        try {
                const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/api/messages/${jobId}`, {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              );
            if (response.status === 200) {
                const parsed = await response.json()
                setMessages(parsed)
            }
        } catch (error) {
            console.error(error)
        }
    }

    const getUsers = async () => {
      try {
              const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/api/producers`, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
          if (response.status === 200) {
              const parsed = await response.json()
              setUsers(parsed)
          }
      } catch (error) {
          console.error(error)
      }
  }

    useEffect(() => {
        fetchJob()
        fetchMessages()
        getUsers()
    }, [shouldCheckNew])
 

    return (
        <div>
          <Navbar />
          <div className="pageView">
          {job && (
            <>
            <div className="bio">
              <h2>Job Details: {job.title}</h2>
              <br></br>
              <h4>Location: </h4><p>{job.location}</p>
              
              <h4>Job Type: </h4><p>{job.jobType}</p>
              <h4>Description: </h4><p>{job.description}</p>
              <h4>Contact Number: </h4><p>{job.contactNumber}</p>
              </div>
            </>
          )}
          <br></br>
          <Message shouldCheckNew={shouldCheckNew} setShouldCheckNew={setShouldCheckNew}/>
          <>
          <h3>Last messages:</h3>

            {messages.map((message) => (
              <div key={message._id}>
                {users.map((u) => {
                  if (!message.createdBy.includes(u._id)) {
                    return null;
                  }
                  return (
                    <div key={u._id}>
                      <h4>{u.name}</h4>
                    </div>
                  );
                })}
                <p>{message.comment}</p>
                <p>
                  {`${message.created.slice(0, 10)} at ${message.created.slice(
                    11,
                    16
                  )}`}
                </p>
                <br />
              </div>
            ))}

          </>
</div>
    <Footer />
    </div>
  );
} 

export default OneJob