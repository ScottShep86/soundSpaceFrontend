/* import React from 'react' */
import { useParams } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { useEffect } from "react"
import axios from "axios"
import CircularProgress from '@mui/material/CircularProgress'

function Profile() {

  const { id } = useParams()
  const [userProducer, setUserProducer] = useState([]) 
  const [isLoading, setIsLoading] = useState(true)

  const getProfile = async () => {
    try {
      const response = await axios.get(`EXAMPLE/${id}`) 
      setUserProducer(response.data)
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
            <h3>{userProducer.name}</h3>
            <p>{userProducer.email}</p>
            <img src={userProducer.picture} alt='profile picture'/>
            <p>{userProducer.location}</p>
            <p>{userProducer.associatedActs}</p>
            <p>{userProducer.aboutMe}</p>
            <p>{userProducer.favoriteProducers}</p>
            <p>{userProducer.genre}</p>
          </div>)
        } 
      <Footer />
    </div>
  )
}

export default Profile