import React, { useState } from 'react';
import axios from 'axios';
import './AddNewPicks.css'; // Import the custom CSS file
import { useNavigate } from "react-router-dom";


function AddNewPicks() {
  const navigate = useNavigate();

  const [movieName, setMovieName] = useState('');
  const [genre, setGenre] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token'); 
    console.log("token ki value from frontend"+ token);

    try {
      const response = await axios.post(
        'http://localhost:3001/addNewPicks',
        {
          movieName: movieName,
          genre: genre,
          imageURL: imageUrl, // Make sure to use imageURL instead of imageUrl
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        navigate('/yourPicks')
        // Successfully added new pickS
        
        setSuccessMessage('Movie picks added successfully!');
        setErrorMessage('');
        // Clear the input fields after successful submission
        setMovieName('');
        setGenre('');
        setImageUrl('');
      } else {
        setErrorMessage('Failed to add movie picks');
        setSuccessMessage('');
      }
    } catch (error) {
      console.error('Error adding movie picks:', error);
      setErrorMessage('Error adding movie picks. Please try again later.');
      setSuccessMessage('');
    }
  };

  return (
    <div>
    <div className="add-new-picks-container">
      <h2 className='heading1'>Add New Movie Picks</h2>
      <form onSubmit={handleSubmit} className="add-new-picks-form">
        <div className="form-group">
          <label htmlFor="movieName">Movie Name:</label>
          <input
            type="text"
            id="movieName"
            className="form-control"
            value={movieName}
            onChange={(e) => setMovieName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="genre">Genre:</label>
          <input
            type="text"
            id="genre"
            className="form-control"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="text"
            id="imageUrl"
            className="form-control"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-submit">Add Movie Picks</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
    <button onClick={()=>{navigate('/searchMovie')}} className='btnSearch'>Search For Movie</button>
    </div>
  );
}

export default AddNewPicks;
