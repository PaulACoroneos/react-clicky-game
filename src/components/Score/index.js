import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledScore = styled.div`
    margin-right:8px;
    font-size:24px;
    list-style-type: none;
`;

function Score ({best, current}) {
    return (
        <StyledScore>{`Best Score: ${best} Current Score: ${current}`}</StyledScore>
    );
}

Score.proptypes = {
    best: PropTypes.string,
    current: PropTypes.string
}

export default Score;