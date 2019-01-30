import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

function Footer({text}) {
    return (
        <StyledFooter>{text}</StyledFooter>
    );
}

Footer.proptypes = {
    text: PropTypes.string
}

export default Footer;