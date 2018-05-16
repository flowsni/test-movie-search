import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Header from './header/Header';
import Main from './main/Main';
import Movie from './movie/Movie'
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path="/movies/:movieId" component={Movie} />
        </ Switch>
      </div>
    </BrowserRouter>
  )
}


 export default App;
