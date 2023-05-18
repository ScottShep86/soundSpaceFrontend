/* import React from 'react' */
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
        <button>SignUp</button>
    </form>
    {/* Edit form for Record Label */}
    <form>
        <label>Company Name: <input/></label>
        <label>E-Mail: <input/></label>
        <label>Password: <input/></label>
        <label>Company Logo: <input/></label>
        <label>Location: <input/></label>
        <label>About us: <input/></label>
        <label>Associated Acts: <input/></label>
        <button>SignUp</button>
    </form>
    </div>
  )
}

export default EditProfileP