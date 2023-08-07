import React, { useState } from 'react'
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './elements/Navbar';
import YourPicks from './Components/YourPicks';
import AddNewPicks from './Components/AddNewPicks';
import SearchMovie from './Components/SearchMovie';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("")

  return (
    <BrowserRouter>
    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setToken={setToken}/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/yourPicks" element={<YourPicks/>}/>
        <Route path="/addNewPicks" element={<AddNewPicks/>}/>
        <Route path="/searchMovie" element={<SearchMovie/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App


