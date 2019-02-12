import React from 'react';
import styled from 'styled-components';
import GameCard from '../GameCard'
import characters from "./characters.json";

const GameContainer = styled.div`
    background-color:#8AC6D0;
    justify-content: space-between;
    display:flex;
    flex-wrap: wrap;
    margin: 25px auto 25px auto;
    border-radius:5px;
    padding: 8px;
    
`;

//This function takes in the array of cards and returned a shuffled array to display
function shuffleCards(characters) {
    //TODO: Get rid of this ugly for loop
    for(let i = Object.keys(characters).length-1;i > 0; i--) {
        const j = Math.floor(Math.random()* (i+1));
        const temp = characters[i];
        characters[i] = characters[j];
        characters[j] = temp;
    }
    console.log(characters);
    return characters;
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            correct: [] //array of cards that were guessed\
        };
    }

    onClick = (event) => {
        let selected = event.target.dataset.name; 
        console.log(selected, 'selected');
        
        let current = this.state.currentScore;
        let best = this.state.bestScore;
        let alreadyPicked = this.state.correct;
        //console.log(`current core ${current},best score ${best},array of cards ${alreadyPicked}`);
        if(!alreadyPicked.includes(selected)) {
            let bestScore = best>current ? best : best+1;
            //currentScore: current+1, bestScore: bestScore }
            this.setState({correct: [...alreadyPicked,selected]});
        }
        else {
            this.setState({correct: []});
        }
    }

    render() {
        const shuffledCards = shuffleCards(characters);
        return (
            <GameContainer>{shuffledCards.map( character => (
                <GameCard 
                    id={character.id}
                    key={character.id}
                    name={character.name}
                    src={character.src}
                    alt={character.name}
                    onClick={this.onClick}
                />
            ))}
            </GameContainer>
        );
    }
}

export default Game;