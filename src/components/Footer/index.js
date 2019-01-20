import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    display: flex;
    background-color:white;
    padding-top: 24px;
    padding-bottom: 24px;
    margin-left:auto;
    margin-right:auto;
    justify-content: center;
    background-color:#36213E;
    font-size:32px;
    color: #B8F3FF;
`;

class Footer extends React.Component {
    render() {
        return (
            <StyledFooter>{this.props.text}</StyledFooter>
        );
    }
}

export default Footer;