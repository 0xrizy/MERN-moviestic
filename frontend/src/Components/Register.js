import React, { useState } from "react";
import axios from "axios";
import "./Register.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: name,
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:3001/register", formData)
      .then((response) => {
        console.log(response.data);
        if (response.data.key) navigate("/login");
        else alert(`ERROR: ${response.data.message}`);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    
    <div className="register-container">
        <h1>Register</h1>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
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
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
