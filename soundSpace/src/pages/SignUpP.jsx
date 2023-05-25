/* import React from 'react' */
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function SignUpP() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [associatedActs, setAssociatedActs] = useState("");
  const [genre, setGenre] = useState("");

  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `${import.meta.env.VITE_BASE_API_URL}/auth/signup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          location,
          aboutMe,
          associatedActs,
          genre,
        }),
      }
    );
    if (response.status === 201) {
      navigate("/login");
    } else {
      const errorResponse = await response.json();
      setErrorMessage(errorResponse.message);
    }
  };

  return (
    <div className="page">
      <Navbar />
      <div className="pageView">
      <h2>SignUp</h2>

      <form onSubmit={handleSubmit}>
        <div className="inputField">
        <label >Name: <input type="name" required value={name} onChange={event => setName(event.target.value)}/></label>
        </div>
        <div className="inputField">
        <label>E-Mail: <input type="email" required value={email} onChange={event => setEmail(event.target.value)}/></label>
        </div>
        <div className="inputField">
        <label>Password: <input type="password" required value={password} onChange={event => setPassword(event.target.value)}/></label>
        </div>
        <div className="inputField">
        <label>Location: <input type="location" value={location} onChange={event => setLocation(event.target.value)}/></label>
        </div>
        <div className="inputField">
        <label>About me: <textarea type="aboutMe" placeholder="Tell us a litte about yourself..."
            cols="30"
            rows="10" value={aboutMe} onChange={event => setAboutMe(event.target.value)}/></label>
        </div>
        <div className="inputField">
        <label>Associated Acts: <input type="associatedActs" value={associatedActs} onChange={event => setAssociatedActs(event.target.value)}/></label>
        </div>
        <div className="inputField">
        <label>Genre: <select type="genre" value={genre} onChange={event => setGenre(event.target.value)}>
        <option>Please Select</option>
        <option>Rock</option>
        <option>Pop</option>
        <option>Classical</option>
        <option>Jazz</option>
        <option>Hip Hop</option>
        <option>Electronic</option>
        <option>Country</option>
        <option>R&B</option>
        <option>Reggae</option>
        <option>Alternative</option>
        <option>Metal</option>
        </select>
        </label>
        </div>
        <div className="authSection">
        <br></br>
        <button className='formBtn' type="submit">SignUp</button>
        <br></br>
        <p>Already a User?</p>
        <Link className="authLink" to={"/login"}>LogIn to your account</Link>
        {errorMessage && <p className='errorMessage'>{errorMessage}</p>}
        </div>
      </form>
      </div>
      <Footer />
    </div>
  );
}

export default SignUpP;