import React from 'react';
import Header from './style'
import Scoreboard from './components/Scoreboard'
import Logo from './components/Logo'
import Instructions from './components/Instructions'

class HeaderWrapper extends React.Component {
  render () {
    return (
      <div>
        <Logo />
        <Instructions instructions = 'Click a photo to begin'/>
        <Scoreboard />
      </div>
    );
  }
}

export default Header;