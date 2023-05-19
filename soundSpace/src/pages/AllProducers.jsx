/* import React from 'react' */
import axios from "axios"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import CircularProgress from '@mui/material/CircularProgress'

function AllProducers() {

  const [producers, setProducers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getAllProducers = async () => {
    try {
      const response = await axios.get('EXAMPLE')
      setProducers(response.data)
      setIsLoading(false)
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
      AllProducers this can be deleted later
      {isLoading ?
          <CircularProgress /> : producers.map(oneProducer => (
          <h3><Link to={'EXAMPLE'}>{oneProducer.name}</Link></h3>
          ))}
      <Footer />
    </div>
  )
}

export default AllProducers