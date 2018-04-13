import React from 'react';
import './Selection.css';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const Selection = ({ genre, genres, onGenreChange, handleChange }) => (
  <div className='selection'>
    <label>Genre</label>
    <Select 
      name='form-field-name'
      value={genre}
      onChange={handleChange}
      options={
        genres.map( genre => ({
          value: genre.id,
          label: genre.name
        }))
      }
      multi={true}      
    />
  </div>
)

export default Selection;
