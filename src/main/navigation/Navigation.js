import React from 'react';
import './Navigation.css';
import Selection from './Selection'
import Slider from './Slider'
import Button from './Button'

class Navigation extends React.Component {
  componentDidMount() {
    fetch(this.props.url)
      .then(response => response.json())
      .then(data => this.props.setGenres(data.genres))
      .catch(error => console.log(error))
  }

  render() {
    const { genre, genres, onChange, onGenreChange, onSearchButtonClick, year, rating, runtime, handleChange } = this.props
    return (
      <section className='navigation'>
        <div className="left-nav">
          <Selection
            genre={genre}
            onGenreChange={onGenreChange}
            genres={genres}
            handleChange={handleChange}
            />
          <Slider data={year} onChange={onChange}/>
          <Slider data={rating} onChange={onChange}/>
          <Slider data={runtime} onChange={onChange}/>
          <Button onClick={onSearchButtonClick}>
            Search
          </Button>
        </div>
      </section>
    )
  }
}

export default Navigation
