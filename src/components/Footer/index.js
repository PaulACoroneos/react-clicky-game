import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    background-color:white;
    padding-top: 24px;
    padding-bottom: 24px;
    border:2px solid black;
    border-radius:5px;
    margin-left:8px;
    margin-right:8px;
`;

class Footer extends React.Component {
    render() {
        return (
            <StyledFooter>{this.props.text}</StyledFooter>
        );
    }
}

export default Footer;