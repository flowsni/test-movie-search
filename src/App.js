import React, { Component } from 'react';
import Header from './header/Header';
import Main from './main/Main';
import './App.css';

const App = () => {
  console.log(process.env.REACT_APP_TMDB_API_KEY);
  return (
    <div>
      <Header/>
      <Main/>
    </div>
  )
}
 export default App;
