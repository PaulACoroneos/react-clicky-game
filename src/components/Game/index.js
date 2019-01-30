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
            correct: [], //array of cards that were guessed\
            currentScore: 1,
            bestScore: 3
        };
    }

    onClick = (event) =>{
        let selected = event.target.dataset.name; //TODO: refactor this. it's really sloppy
        console.log(selected);
        this.setState((state) => {
            let current = state.currentScore;
            let best = state.bestScore;
            let alreadyPicked = state.correct;
            console.log(current,best,alreadyPicked);
            
            if(!alreadyPicked.includes(selected)) {
                return {currentScore: current++, bestScore: best>current ? current : best, correct: alreadyPicked.push(selected) };
            }
            else {
                return {currentScore: 0, bestScore: 0, correct: []};
            }
        });
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