import React, { Component } from 'react';
import './App.css';
import Infobar from './components/Infobar';
import Game from './components/Game';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Infobar />
        <Game />
        <Footer text="I am a footer"/>
      </div>
    );
  }
}

export default App;
