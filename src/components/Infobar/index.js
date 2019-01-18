import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';
import Instructions from '../Instructions';
import Score from '../Score';

const Navbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color:white;
    padding-top: 24px;
    padding-bottom: 24px;
    border:2px solid black;
    border-radius:5px;
    margin:25px;
  }
`;

class Infobar extends React.Component {
    render() {
        return (
            <Navbar>
                <Logo text="Clicky game"/>
                <Instructions text="Click a card to begin" />
                <Score best="NaN" current="NaN"/>
            </Navbar>
        );
    }
}

export default Infobar;