import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    min-width:150px;
    word-wrap: break-word;
    border-radius:5px;
    border: 2px #63768D solid;
    padding:8px;
    flex: 1 0 20%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    margin: 8px;
    background-color:#554971;
    &:hover{
        transform: scale(1.05);
        -moz-transform: scale(1.05);
       -ms-transform: scale(1.05);
       -webkit-transform: scale(1.05);
       -o-transform: scale(1.05);
       }
}
`;

const CardImg = styled.img`
    width:125px;
    height:auto;
    max-height:100px;
    margin:8px;
    justify-content:center;
    align-items:center;
    background-color:white;
    border-radius:10px;
    padding:8px;
`;

const CardTitle = styled.span`
    display:flex;
    justify-content:center;
    font-size:32px;
    color:#B8F3FF;
`;

function GameCard(props) {
    return (
        <Card onClick={this.p}>
            <CardTitle>{props.name}</CardTitle>
            <CardImg src={`/images/${props.src}`} alt={props.alt} />
        </Card>
    );
}

export default GameCard;
