import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:3001/login", formData)
      .then((response) => {
        console.log(response.data);
        if (response.data.key) {
          localStorage.setItem("token", response.data.token);
          setIsLoggedIn(true);
          navigate("/yourPicks");
        } else {
          alert(`ERROR: ${response.data.message}`);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="total">
      <div className="register-container">
        <h1>Login</h1>
        <div className="card">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
