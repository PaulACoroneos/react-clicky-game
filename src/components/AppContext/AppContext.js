import React, {Component} from 'react';

export const AppContext = React.createContext('app');

class AppProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentScore: 0,
      bestScore: 0
    };
  }

  updateScore = (current,best) => {
    this.setState({currentScore:current,bestScore:best});
  }

  render() {
    return (
      <AppContext.Provider 
        value={{
          state: this.state,
          updateScore: this.updateScore
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }

}
