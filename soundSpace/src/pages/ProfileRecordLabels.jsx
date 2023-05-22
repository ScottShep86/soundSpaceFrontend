/* import React from 'react' */
import { useParams } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"
import axios from "axios"
import CircularProgress from '@mui/material/CircularProgress'

function Profile() {

  const { id } = useParams()
  const [userRecordLabel, setUserRecordLabel] = useState([]) 
  const [isLoading, setIsLoading] = useState(true)

  const getProfile = async () => {
    try {
      const response = await axios.get(`EXAMPLE/${id}`) 
      setUserRecordLabel(response.data)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProfile()
  }, [])

  return (
    <div>
      <Navbar />
        Profile this can be deleted later
        {isLoading ? 
          (<CircularProgress />) : 
          (<div>
            <h3>{userRecordLabel.companyName}</h3>
            <p>{userRecordLabel.email}</p>
            <img src={userRecordLabel.logo} alt='profile logo'/>
            <p>{userRecordLabel.location}</p>
            <p>{userRecordLabel.associatedActs}</p>
            <p>{userRecordLabel.aboutUe}</p>
          </div>)
        } 
      <Footer />
    </div>
  )
}

export default Profile