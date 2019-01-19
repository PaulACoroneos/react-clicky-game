import React from 'react';
import styled from 'styled-components';
import InfoItem from '../InfoItem';

const Navbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color:white;
    padding-top: 24px;
    padding-bottom: 24px;
    border:2px solid black;
    border-radius:5px;
    margin-left:8px;
    margin-right:8px;
    margin-top:8px;
    margin-bottom:25px;
  }
`;

class Infobar extends React.Component {
    render() {
        return (
            <Navbar>
                <InfoItem text="Clicky game"/>
                <InfoItem text="Click a card to begin" />
                <InfoItem text="score"/>
            </Navbar>
        );
    }
}

export default Infobar;