/* import React from 'react' */
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SessionContext } from '../contexts/SessionContext';

function Navbar() {
  const { isLoggedIn, logout } = useContext(SessionContext);

  return (
    <div className="navbar">
      <div className="navbarLeft">
      <Link to="/" className='logo'>soundSpace</Link>
      </div>
      <div className="navbarRight">
      {isLoggedIn ? (
        <>
          <Link to="/jobs" className='link'>Jobs</Link>
          <Link to="/profile" className='link'>My Profile</Link>
          <Link to="/" className='link' onClick={logout}>Log Out</Link>
        </>
      ) : (
        <>
          <Link to="/signup" className='link'>Sign Up</Link>
          <Link to="/login" className='link'>Log In</Link>
        </>
      )}
      </div>
    </div>
  );
}

export default Navbar;