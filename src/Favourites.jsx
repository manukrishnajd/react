// src/components/Favorites.js
import React from 'react';

const Favorites = ({ favorites }) => {
  return (
    <div>
      <h2>Favorites</h2>
      <ul>
        {favorites.Title}
      </ul>
    </div>
  );
};

export default Favorites;
