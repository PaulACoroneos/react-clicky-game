import React from 'react';
import styled from 'styled-components';
import GameCard from '../GameCard'
import characters from "../characters.json";

const GameContainer = styled.div`
    background-color:white;
    border:2px black solid;
    border-radius:5px;
    margin-left:8px;
    margin-right:8px;
    margin-bottom:25px;
    justify-content: space-between;
`;

class Game extends React.Component {
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