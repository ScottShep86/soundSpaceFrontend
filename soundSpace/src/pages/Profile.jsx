/* import React from 'react' */
import { useParams } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

function Profile() {

  { id } = useParams()

  return (
    <div>
      <Navbar />
        Profile this can be deleted later
        
      <Footer />
    </div>
  )
}

export default Profile