/* import React from 'react' */
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"
import ProfilePic from "../assets/images/alexey-ruban-73o_FzZ5x-w-unsplash.png";
/* import { Link } from "react-router-dom" */
/* import CircularProgress from '@mui/material/CircularProgress' */

function AllProducers() {

  const [producers, setProducers] = useState([])

 /*  const getAllProducers = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_API_URL}/api/producers`)
      setProducers(response.data)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
 */
  const fetchProducers = async () => {
    try {
        const allProducers = await fetch(`${import.meta.env.VITE_BASE_API_URL}/api/producers`)
        if(allProducers.status === 200) {
            const parsed = await allProducers.json()
            setProducers(parsed)
            
        }
    } catch (error) {
        console.error(error)
    }
  }


  useEffect (() => {
    fetchProducers()
  }, [])

  return (
    <div>
      <Navbar />
      <h2>AllProducers</h2>
      {producers.map(producer => (
          <div key={producer._id}>
          <h3>{producer.name}</h3>
          <img
              className="allProducersImg"
              src={ProfilePic}
              alt="profile picture"
            />
            <p>{producer.location}</p>
            <p>{producer.genre}</p>
          </div>
          ))}
      <Footer />
    </div>
  )
}

export default AllProducers