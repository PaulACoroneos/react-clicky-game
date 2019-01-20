import React from 'react';
import styled from 'styled-components';

const Styledlogo = styled.div`
    margin-left:8px;
    margin-right:8px;
    font-size:32px;
    padding:8px;
`;

class Logo extends React.Component {
    render() {
        return (
            <Styledlogo>{this.props.text}</Styledlogo>
        );
    }
}

export default Logo;