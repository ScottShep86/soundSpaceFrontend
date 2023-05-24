import { useState, useContext } from "react";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { useNavigate } from "react-router-dom";
import { SessionContext } from "../contexts/SessionContext";

/* import React from 'react' */

function CreateJob() {
    const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [description, setDescription] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const { token } = useContext(SessionContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `${import.meta.env.VITE_BASE_API_URL}/api/jobs`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          title,
          location,
          jobType,
          description,
          contactNumber,
        }),
      }
    );
    if (response.status === 201) {
      navigate("/profile");
    } else {
      const errorResponse = await response.json();
      setErrorMessage(errorResponse.message);
    }
  };
  return (
    <div>
    <Navbar />
      Add New Job
      <form onSubmit={handleSubmit}>
        <label>
          Job Title:{" "}
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <label>
          Location:{" "}
          <input
            type="text"
            placeholder="which City"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            required
          />
        </label>
        <label>
          Job Type:{" "}
          <select
            type="text"
            value={jobType}
            onChange={(event) => setJobType(event.target.value)}
            required
          >
            <option>Producer</option>
            <option>Mixing Engineer</option>
            <option>Mastering Engineer</option>
            <option>Songwriter</option>
            <option>Beatmaker</option>
          </select>
        </label>
        <label>
          Information:{" "}
          <textarea
            name="information"
            placeholder="Please give a description of the available Job"
            cols="30"
            rows="10"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required
          />
        </label>
        <label>
          Contact Number:{" "}
          <input
            type="text"
            placeholder="incl. Country code"
            value={contactNumber}
            onChange={(event) => setContactNumber(event.target.value)}
          />
        </label>
        {errorMessage && <p className="errorMessage">{errorMessage}</p>}
        <button className="formBtn" type="submit">
          Post a Job
        </button>
      </form>
    
    <Footer />
    </div>
  )
}

export default CreateJob