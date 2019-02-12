import React from 'react';
import styled from 'styled-components';

const StyledScore = styled.div`
    margin-right:8px;
    font-size:24px;
    list-style-type: none;
`;

class Score extends React.Component {
    render() {
        return (
            <StyledScore>{`Best Score: ${this.props.best} Current Score: ${this.props.current}`}</StyledScore>
        );
    }
}

export default Score;