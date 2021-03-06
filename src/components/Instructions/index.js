import React from 'react';
import styled from 'styled-components';

const StyledInstruction = styled.div`
    background-color:#63768D;
    justify-content: space-between;
    display:flex;
    flex-wrap: wrap;
    margin: 100px auto 25px auto;
    padding: 25px;
    font-size:28px;
    flex-direction:column;
    color:#B8F3FF;
    text-align: center;
    vertical-align: middle;
`;

const titleStyle = {
    fontSize: '72px',
    margin: '50px auto'
}

const instructStyle = {
    width: '75vw',
    margin: '0 auto',
    padding:'15px 0px 25px 0px'
}

class Instructions extends React.Component {
    render() {
        return (
            <StyledInstruction>
                <span style={titleStyle}>Final Fantasy VII Clicky Game</span>
            <span style={instructStyle}>{this.props.text}</span></StyledInstruction>
        );
    }
}

export default Instructions;