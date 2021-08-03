import React, { Component } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Article from './Components/Article';
import chocoPizzaData from './chocoPizzaData';
import AuthorBio from './Components/AuthorBio';

import './Reset.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Article data={chocoPizzaData.article}/>
        <AuthorBio data={chocoPizzaData.author}/>
        <Footer />
      </>
    );
  }
}

export default App;
