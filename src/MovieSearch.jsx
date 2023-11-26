// src/components/MovieSearch.js
import React, { useState, useEffect } from 'react';

const MovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        
        `https://www.omdbapi.com/?t=the%20departed&apikey=a5ef1268`
      );
      const data = await response.json();
      setMovies(data.Search || []);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const addToFavorites = (movie) => {
    setFavorites((prevFavorites) => [...prevFavorites, movie]);
  };

console.log(movies,'in movie search');

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a movie"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={fetchMovies}>Search</button>
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>
            {movie.Title}
            <button onClick={() => addToFavorites(movie)}>Add to Favorites</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieSearch;
