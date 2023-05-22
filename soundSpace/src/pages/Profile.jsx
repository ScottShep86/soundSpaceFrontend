/* import React from 'react' */
import { useParams } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import CircularProgress from '@mui/material/CircularProgress'
import { SessionContext } from "../contexts/SessionContext"

function Profile() {

  const verifyToken = async currentToken => {
    const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/auth/verify`, {
      headers: {
        Authorization: `Bearer ${currentToken}`,
      },
    })
    console.log('verifytoken response',response)
    if (response.status === 200) {
      const parsed = await response.json()
      console.log("2nd parsed:",parsed)
      return parsed
    }
  }


  const [userProducer, setUserProducer] = useState([]) 
  const [isLoading, setIsLoading] = useState(true)
  console.log("userProducer:",userProducer)

  const {logout, token} = useContext(SessionContext)

  

  useEffect(() => {

  const getProfile = async () => {
      try {
        const localToken = localStorage.getItem('authToken')
        const something = await verifyToken(localToken)
        console.log("ss",something)
        const response = await axios.get(`${import.meta.env.VITE_BASE_API_URL}/profile/${something.producer._id}`) 
        setUserProducer(response.data)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    getProfile()
  }, [])

  return (
    <div>
      <Navbar />
        Profile this can be deleted later
        {isLoading ? 
          (<CircularProgress />) : 
          (<div>
            <h3>{userProducer.name}</h3>
            <p>{userProducer.email}</p>
            <img src={userProducer.picture} alt='profile picture'/>
            <p>{userProducer.location}</p>
            <p>{userProducer.associatedActs}</p>
            <p>{userProducer.aboutMe}</p>
            <p>{userProducer.favoriteProducers}</p>
            <p>{userProducer.genre}</p>
            <button type='button' onClick={logout}>Log Out</button>
          </div>)
        } 
      <Footer />
    </div>
  )
}

export default Profile