import React from 'react';
import styled from 'styled-components';
import {mainColor} from '../styles/variables';
import logo from '../assets/images/logo.png';
import avatar from '../assets/images/avatar-default.png';

const NavigationDiv = styled.div`
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;

  ${({pointingUp}) => {
    return pointingUp ? `border-bottom: 10px solid ${mainColor};` : `border-top: 10px solid ${mainColor};`
  }}
`;

function Navigation() {
  return (
    <NavigationDiv>
      <img src={logo} />
      <div>
        <img src={avatar} />
        <div>John Doe <Triangle pointingUp/></div>
      </div>
    </NavigationDiv>
  );
}

export default Navigation;
