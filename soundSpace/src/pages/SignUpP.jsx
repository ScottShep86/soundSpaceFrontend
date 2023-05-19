/* import React from 'react' */
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function SignUpP() {
  return (
    <div>
    <Navbar />
    SignUp Producer
    <form>
        <label>Name: <input/></label>
        <label>E-Mail: <input/></label>
        <label>Password: <input/></label>
        <label>Picture: <input/></label>
        <label>Location: <input/></label>
        <label>About me: <input/></label>
        <label>Associated Acts: <input/></label>
        <label>Genre: <input/></label>
        <button>SignUp</button>
    </form>
    <p>Not a producer?</p>
    <Link to={'/signup/record-label'}>Sign Up with your Record Label</Link>
    <Footer />
    </div>

  )
}

export default SignUpP