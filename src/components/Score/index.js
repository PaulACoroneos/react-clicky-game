import React from 'react';
import styled from 'styled-components';

const StyledScore = styled.div`
    margin-right:8px;
    font-size:24px;
    list-style-type: none;
`;

<<<<<<< HEAD
function Score ({best, current}) {
    return (
        <StyledScore>{`Best Score: ${best} Current Score: ${current}`}</StyledScore>
    );
}

Score.proptypes = {
    best: PropTypes.string,
    current: PropTypes.string
};
=======
class Score extends React.Component {
    render() {
        return (
            <StyledScore>{`Best Score: ${this.props.best} Current Score: ${this.props.current}`}</StyledScore>
        );
    }
}
>>>>>>> parent of 04301b9... game is actually getting card info now. but need to get score working...

export default Score;