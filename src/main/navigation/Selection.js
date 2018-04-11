import React from 'react';
import './Selection.css';

const Selection = ({ genre, genres, onGenreChange }) => (
  <div className='selection'>
    {console.log('genres', genres)}
    <label>Genre</label>
    <select value={genre} onChange={onGenreChange}>
      {genres.map( genre => (
        <option key={genre.id} value={genre.name}>{genre.name}</option>
      ))}
    </select>
  </div>
)

export default Selection;
