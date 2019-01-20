import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';
import Instructions from '../Instructions';
import Score from '../Score';

const Navbar = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    background-color:white;
    padding-top: 24px;
    padding-bottom: 24px;
    margin: 0px auto 0px auto;
    background-color:#36213E;
    color:#B8F3FF;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-right:8px;
    overflow: hidden;
    position: fixed; /* Set the navbar to fixed position */
    top: 0; /* Position the navbar at the top of the page */
    width: 100%; /* Full width */
    z-index:1; /*Add this*/
  }
`;

class Infobar extends React.Component {
    render() {
        return (
            <Navbar>
                <Logo text="Final Fantasy VII Clicky Game"/>
                <Score best="0" current="0"/>
            </Navbar>
        );
    }
}

export default Infobar;