import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./YourPicks.css"; // Import the CSS file

function YourPicks() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem("token");

    if (!authToken) {
      return;
    }
    axios
      .get("http://localhost:3001/yourPicks", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => setMovies(response.data.myPicks))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  return (
    <div>
<button onClick={()=>navigate("/addNewPicks")} className="button1">Add New Movie</button>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie._id} className="movie-card">
            <img
              className="movie-image"
              src={movie.imageURL}
              alt={movie.movieName}
            />
            <div className="movie-info">
              <h3>{movie.movieName}</h3>
              <p>{movie.genre}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default YourPicks;
