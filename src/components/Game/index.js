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

class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            //cards: shuffleCards(),
            correct: [] //array of cards that were guessed
        };
    }

    //This function shuffles the cards after click
    onCardClick() {
        
    }

    render() {
        return (
            <GameContainer>{characters.map( character => (
                <GameCard 
                    id={character.id}
                    key={character.id}
                    name={character.name}
                    src={character.src}
                    alt={character.name}
                />
            ))}
            </GameContainer>
        );
    }
}

export default Game;