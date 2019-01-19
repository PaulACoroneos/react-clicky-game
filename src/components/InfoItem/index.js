import React from 'react';
import styled from 'styled-components';

const StyledInfo = styled.div`
    margin-left:8px;
    margin-right:8px;
    font-size:24px;
`;

class InfoItem extends React.Component {
    render() {
        return (
            <StyledInfo>{this.props.text}</StyledInfo>
        );
    }
}

export default InfoItem;