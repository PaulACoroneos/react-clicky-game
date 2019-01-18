import React from 'react';

class Instructions extends React.Component {
    render() {
        return (
            <span>{this.props.text}</span>
        );
    }
}

export default Instructions;