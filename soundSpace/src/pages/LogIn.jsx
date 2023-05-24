import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { SessionContext } from '../contexts/SessionContext';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

function LogIn() {
  const navigate = useNavigate();

  const { setToken } = useContext(SessionContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();
    const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

      if (response.status === 200) {
      const tokenFromResponse = await response.json();
      setToken(tokenFromResponse);
      navigate(`/profile`);
    } else {
      const errorResponse = await response.json();
      setErrorMessage(errorResponse.message);
    }
  };

  return (
    <div>
      <Navbar />
      <h2>LogIn</h2>
      <form onSubmit={handleSubmit}>
        <label>E-Mail Address: <input name="email" type='email' required value={email} onChange={event => setEmail(event.target.value)}/></label>
        <label>Password: <input name="password" type='password' required value={password} onChange={event => setPassword(event.target.value)}/></label>
        {errorMessage && <p className='errorMessage'>{errorMessage}</p>}
        <button className='formBtn' type='submit'>LogIn</button>
      </form>
      <p>Not a User?</p>
      <Link to={'/signup'}>Sign Up as a Producer</Link>
      <Footer />
    </div>
  );
}

export default LogIn;