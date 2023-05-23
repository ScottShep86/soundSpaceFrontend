/* import React from 'react' */
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function SignUpP() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [picture, setPicture] = useState("");
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
          picture,
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
      <h2>SignUp</h2>

      <form onSubmit={handleSubmit}>
        <label>Name: <input type="name" required value={name} onChange={event => setName(event.target.value)}/></label>
        <label>E-Mail: <input type="email" required value={email} onChange={event => setEmail(event.target.value)}/></label>
        <label>Password: <input type="password" required value={password} onChange={event => setPassword(event.target.value)}/></label>
        <label>Picture: <input type="picture" value={picture} onChange={event => setPicture(event.target.value)}/></label>
        <label>Location: <input type="location" value={location} onChange={event => setLocation(event.target.value)}/></label>
        <label>About me: <input type="aboutMe" value={aboutMe} onChange={event => setAboutMe(event.target.value)}/></label>
        <label>Associated Acts: <input type="associatedActs" value={associatedActs} onChange={event => setAssociatedActs(event.target.value)}/></label>
        <label>Genre: <select type="genre" value={genre} onChange={event => setGenre(event.target.value)}>
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
        {errorMessage && <p className='errorMessage'>{errorMessage}</p>}
        <button className='formBtn' type="submit">SignUp</button>
        <p>Already a User?</p>
        <Link to={"/login"}>LogIn to your account</Link>
      </form>
      <Footer />
    </div>
  );
}

export default SignUpP;
