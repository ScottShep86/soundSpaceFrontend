import { Link } from 'react-router-dom'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'

function LogIn() {
  return (
    <div>
    <Navbar />
    <h1>LogIn</h1>
    <form>
        <label>E-Mail Address: <input /></label>
        <label>Password: <input /></label>
        <button>LogIn</button>
    </form>
    <p>Not a User?</p>
    <Link to={'/signup-producer'}>Sign Up as a Producer</Link>
    <Link to={'/signup-record-label'}>Sign Up with your Record Label</Link>
    <Footer />
    </div>
  )
}

export default LogIn