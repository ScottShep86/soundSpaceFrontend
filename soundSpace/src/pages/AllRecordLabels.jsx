/* import React from 'react' */
import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

function AllRecordLabels() {

  const [recordLabels, setRecordLabels] = useState([])

  const getAllRecordLabels = async () => {
    try {
      const response = await axios.get('EXAMPLE')
      setRecordLabels(response.data)
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
        AllRecordLabels
        {recordLabels.map(oneRecordLabel => (
          <h3><Link to={'EXAMPLE'}>{oneRecordLabel.companyName}</Link></h3>
        ))}
      <Footer />
    </div>
  )
}

export default AllRecordLabels