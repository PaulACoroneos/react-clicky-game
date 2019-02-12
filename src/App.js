import React, { Component } from 'react';
import './App.css';
import Infobar from './components/Infobar';
import Game from './components/Game';
import Footer from './components/Footer';
import Instructions from './components/Instructions';
import AppContext from './components/AppContext';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Infobar best={bestScore} current={currentScore}/>;
                <Instructions text= "Click on a image card. The images will then randomly rotate. You score every time you click a card that hasn't been clicked. The game is over if you click the same image twice. Good luck and may the light of the crystal shine on you!"/>
                <Game best={bestScore} current={currentScore} updateScore={updateScore} />;
                <Footer text="Built with React and Styled Components. Created by Paul Coroneos"/>
            </React.Fragment>
        );
    }
}

export default App;
