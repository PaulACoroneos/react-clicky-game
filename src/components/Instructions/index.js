import React from 'react';
import styled from 'styled-components';

const StyledInstruction = styled.li`
    font-size:20px;
    list-style-type: none;
`;


class Instructions extends React.Component {
    render() {
        return (
            <StyledInstruction>{this.props.text}</StyledInstruction>
        );
    }
}

export default Instructions;