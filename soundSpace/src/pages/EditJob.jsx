/* import React from 'react' */
import { useState, useContext, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { SessionContext } from "../contexts/SessionContext";

function EditJob() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [description, setDescription] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [jobId, setJobId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { token } = useContext(SessionContext);
  const {id} = useParams()


  useEffect(() => {
    fetchJob()
  }, [])

  const fetchJob = async () => {

    try {
      const localToken = localStorage.getItem("authToken");
      if (!localToken) return;

      const response = await fetch (`${import.meta.env.VITE_BASE_API_URL}/api/jobs/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localToken}`,
        },
      })
      if (response.status === 200){
        const parsed = await response.json()
        console.log(parsed)
        setTitle(parsed.title)
        setLocation(parsed.location)
        setJobType(parsed.jobType)
        setDescription(parsed.description)
        setContactNumber(parsed.contactNumber)
        setJobId(parsed._id)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `${import.meta.env.VITE_BASE_API_URL}/profile/${jobId}/edit`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
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
    if (response.status === 200) {
      navigate("/profile");
    } else {
      const errorResponse = await response.json();
      setErrorMessage(errorResponse.message);
    }
  };
  return (
    <div>
      <Navbar />
      Edit job
      <form onSubmit={handleSubmit}>
        <label>
          Job Title:{" "}
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value )}
          />
        </label>
        <label>
          Location:{" "}
          <input
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value )}
            required
          />
        </label>
        <label>
          Job Type:{" "}
          <select
            type="text"
            value={jobType}
            onChange={(event) => setJobType(event.target.value )}
            required
          >
            <option>Please Select</option>
            <option value="Producer">Producer</option>
            <option value="Mixing Engineer">Mixing Engineer</option>
            <option value="Mastering Engineer">Mastering Engineer</option>
            <option value="Songwriter">Songwriter</option>
            <option value="Beatmaker">Beatmaker</option>
          </select>
        </label>
        <label>
          Information:{" "}
          <textarea
            name="information"
            cols="30"
            rows="10"
            value={description}
            onChange={(event) => setDescription(event.target.value )}
            required
          />
        </label>
        <label>
          Contact Number:{" "}
          <input
            type="text"
            value={contactNumber}
            onChange={(event) => setContactNumber(event.target.value )}
          />
        </label>
        {errorMessage && <p className="errorMessage">{errorMessage}</p>}
        <button className="formBtn" type="submit">UPDATE</button>
      </form>
      <Footer />
    </div>
  );
}

export default EditJob;