import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    border-radius:5px;
    border: 2px black solid;
    padding:8px;

`;

function GameCard(props) {
    return (
        <Card>
            <title>{props.name}</title>
            <img src={props.src} alt={props.alt} />
        </Card>
    );
}

export default GameCard;
