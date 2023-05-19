/* import React from 'react' */
import axios from "axios"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function AllProducers() {

  const [producers, setProducers] = useState([])

  const getAllProducers = async () => {
    try {
      const response = await axios.get('EXAMPLE')
      setProducers(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect (() => {
    getAllProducers()
  }, [])

  return (
    <div>
      <Navbar />
      AllProducers
        {producers.map(oneProducer => (
          <h3><Link to={`EXAMPLE2`}>{oneProducer.name}</Link></h3>
        ))}

      <Footer />
    </div>
  )
}

export default AllProducers