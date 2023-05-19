/* import React from 'react' */
import axios from "axios"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import CircularProgress from '@mui/material/CircularProgress'

function AllRecordLabels() {

  const [recordLabels, setRecordLabels] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getAllRecordLabels = async () => {
    try {
      const response = await axios.get('EXAMPLE')
      setRecordLabels(response.data)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  } 

  useEffect (() => {
    getAllRecordLabels()
  }, [])

  return (
    <div>
      <Navbar />
        AllRecordLabels this can be deleted later
        {isLoading ?
          <CircularProgress /> : recordLabels.map(oneRecordLabel => (
          <h3><Link to={'EXAMPLE'}>{oneRecordLabel.companyName}</Link></h3>
          ))}
      <Footer />
    </div>
  )
}

export default AllRecordLabels