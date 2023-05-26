/* import React from 'react' */
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import ProfilePic from "../assets/images/alexey-ruban-73o_FzZ5x-w-unsplash.png";
/* import { Link } from "react-router-dom" */
/* import CircularProgress from '@mui/material/CircularProgress' */

function AllProducers() {
  const [producers, setProducers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  /*  const getAllProducers = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_API_URL}/api/producers`)
      setProducers(response.data)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
 */
  const fetchProducers = async (searchTerm = "") => {
    try {
      let endpoint = `${import.meta.env.VITE_BASE_API_URL}/api/producers`
      if (searchTerm) {
        endpoint += `?`
    }
      if (searchTerm) {
        endpoint += `search=${searchTerm}`
    }
      const allProducers = await fetch(endpoint);
      if (allProducers.status === 200) {
        const parsed = await allProducers.json();
        setProducers(parsed);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducers();
  }, []);

  useEffect(() => {
      fetchProducers(searchTerm);
  }, [searchTerm]);

  return (
    <div>
      <Navbar />
      <div className="profileView">
        <h2>AllProducers</h2>
        <div>
        <label>Search<input value={searchTerm} onChange={event => setSearchTerm(event.target.value) }/></label>
        </div>
        <br></br>
        <div className="allProducersContainer">
          {producers.map((producer) => (
            <div key={producer._id}>
              <img
                className="allProducersImg"
                src={ProfilePic}
                alt="profile picture"
              />
              <h3>{producer.name}</h3>
              <div className="profileInfoAP">
              <p>
                <strong>Location: </strong>
                {producer.location}
              </p>
              <p>
                <strong>Genre: </strong>
                {producer.genre}
              </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AllProducers;
