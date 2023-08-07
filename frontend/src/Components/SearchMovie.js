import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function SearchMovie() {
  const navigate = useNavigate();

  const [movieTitle, setMovieTitle] = useState('');
  const [searchResult, setSearchResult] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?t=${encodeURIComponent(movieTitle)}&apikey=fc84aba0`
      );

      if (response.data.Response === 'False') {
        // If the API response contains an error message
        setErrorMessage(response.data.Error);
        setSearchResult({});
      } else {
        // API call successful, update searchResult state with movie details
        const { Title, Genre, Poster } = response.data;
        setSearchResult({ title: Title, genre: Genre, imageURL: Poster });
        setErrorMessage('');
      }
    } catch (error) {
      console.error('Error fetching movie details:', error);
      setErrorMessage('Error fetching movie details. Please try again later.');
      setSearchResult({});
    }
  };

  const handleAddToPicks = async () => {
    const token = localStorage.getItem('token'); // Assuming JWT token is stored in Local Storage
    console.log("Token from vahan se "+ token);

    try {
      const response = await axios.post(
        'http://localhost:3001/addNewPicks',
        {
          movieName: searchResult.title,
          genre: searchResult.genre,
          imageURL: searchResult.imageURL,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        // Successfully added new picks
        setSuccessMessage('Movie picks added successfully!');
        navigate('/yourPicks')
        setErrorMessage('');
        setSearchResult({});
        setMovieTitle('');
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
      <h2>Search Movie</h2>
      <div>
        <input
          type="text"
          value={movieTitle}
          onChange={(e) => setMovieTitle(e.target.value)}
          placeholder="Enter Movie Title"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {searchResult.title && (
        <div>
          <h3>{searchResult.title}</h3>
          <p>Genre: {searchResult.genre}</p>
          <img src={searchResult.imageURL} alt={searchResult.title} />
          <button onClick={handleAddToPicks}>Add to Picks</button>
        </div>
      )}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
  );
}

export default SearchMovie;
