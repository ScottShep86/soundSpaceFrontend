/* import React from 'react' */
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

function Review() {
  return (
    <div>
    <Navbar />
    Review
    <form>
        <label>Created By: <input type='text'/></label>
        <label>Rating: <input type='number'/></label>
        <label>Comment: <textarea/></label>
        <button type='submit'>Submit Review</button>
    </form>
    <Footer />
    </div>
  )
}

export default Review