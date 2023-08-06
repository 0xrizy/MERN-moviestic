import React from 'react';
import './Home.css'; 
import { useNavigate } from 'react-router-dom';

function Home({isLoggedIn,setIsLoggedIn}) {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <div className="background-image"></div>
      <div className="content">
        <h1 className="title">Welcome to MovieStic</h1>
        {!isLoggedIn ? (
          <div className="button-card">
          <button className="login-button" onClick={()=>navigate('/login')}>Login</button>
          <button className="register-button" onClick={()=>navigate('/register')}>Register</button>
        </div>
      ) : (
<div></div>
      )}
        
      </div>
    </div>
  );
}

export default Home;
