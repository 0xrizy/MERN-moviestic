import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css'; 

function Navbar({isLoggedIn,setIsLoggedIn}) {
  console.log("Navbar se aaya "+ isLoggedIn);
  return (
    <div className="navbar-container">
      <Link to="/" className="logo">
        MovieStic
      </Link>
      {!isLoggedIn ? (
        <Link to="/login" className="login">
          Login
        </Link>
      ) : (
        <p className='login'>Logged In</p>
      )}
    </div>
  );
}

export default Navbar;
