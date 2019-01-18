import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.span`
    margin-left:8px;
    font-size:32px;
`;

class Logo extends React.Component {
    render() {
        return (
            <StyledLogo>{this.props.text}</StyledLogo>
        );
    }
}

export default Logo;