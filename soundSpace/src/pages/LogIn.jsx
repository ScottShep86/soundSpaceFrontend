import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { SessionContext } from '../contexts/SessionContext';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

function LogIn() {
  const navigate = useNavigate();

  const { setToken, setIsLoading } = useContext(SessionContext);

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
      setIsLoading(false)
      navigate(`/profile`);
    } else {
      const errorResponse = await response.json();
      setErrorMessage(errorResponse.message);
    }
  };

  return (
    <div className="page">
      <Navbar />
      <div className="pageView">
      <h2>LogIn</h2>
      <form onSubmit={handleSubmit}>
      <div className="inputField">
        <label>E-Mail Address: <input name="email" type='email' required value={email} onChange={event => setEmail(event.target.value)}/></label>
        </div>
        <div>
        <label>Password: <input name="password" type='password' required value={password} onChange={event => setPassword(event.target.value)}/></label>
        </div>
        <div className="authSection">
        <br></br>
        <button className='formBtn' type='submit'>LogIn</button>
        <br></br>
      <p>Not a User?</p>
      <Link className="authLink" to={'/signup'}>Sign Up as a Producer</Link>
      {errorMessage && <p className='errorMessage'>{errorMessage}</p>}
      </div>
      </form>
      </div>
      <Footer />
    </div>
  );
}

export default LogIn;