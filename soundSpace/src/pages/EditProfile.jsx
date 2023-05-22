/* import React from 'react' */
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

function EditProfileP() {
  return (
    <div>
    <Navbar />
    EditProfile
    {/* Edit form for Prducer */}
    <form>
        <label>Name: <input/></label>
        <label>E-Mail: <input/></label>
        <label>Password: <input/></label>
        <label>Picture: <input/></label>
        <label>Location: <input/></label>
        <label>About me: <input/></label>
        <label>Associated Acts: <input/></label>
        <label>Genre: <input/></label>
        <button>Save Changes</button>
    </form>
    <Footer />
    </div>
  )
}

export default EditProfileP