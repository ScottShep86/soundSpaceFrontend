/* import React from 'react' */
import { Link } from 'react-router-dom'
import Navbar from "../components/Navbar"

function SignUpRL() {
  return (
    <div>
    <Navbar />
    SignUp with your Record Label
    <form>
        <label>Company Name: <input/></label>
        <label>E-Mail: <input/></label>
        <label>Password: <input/></label>
        <label>Company Logo: <input/></label>
        <label>Location: <input/></label>
        <label>About us: <input/></label>
        <label>Associated Acts: <input/></label>
        <button>SignUp</button>
    </form>
    <p>Not a record label?</p>
    <Link to={'/signup-producer'}>Sign Up as a Producer</Link>
    </div>
  )
}

export default SignUpRL