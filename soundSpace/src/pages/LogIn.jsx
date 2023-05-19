import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'

function LogIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const handleSubmit = async event => {
    event.preventDefault()
    const response = await fetch('http://localhost:5005/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, password}),
    })
    if (response.status === 200) {
      const tokenFromResponse = await response.json()
      setToken(tokenFromResponse)
      navigate('/profile')
    }
  }
  return (
    <div>
    <Navbar />
    <h1>LogIn</h1>
    <form onSubmit={handleSubmit}>
        <label>E-Mail Address: <input type='email' required value={email} onChange={event => setEmail(event.target.value)}/></label>
        <label>Password: <input type='password' required value={password} onChange={event => setPassword(event.target.value)}/></label>
        <button type='submit'>LogIn</button>
    </form>
    <p>Not a User?</p>
    <Link to={'/signup-producer'}>Sign Up as a Producer</Link>
    <Link to={'/signup-record-label'}>Sign Up with your Record Label</Link>
    <Footer />
    </div>
  )
}

export default LogIn