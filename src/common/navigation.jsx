import React from 'react';
import styled from 'styled-components';
import {mainColor} from '../styles/variables';
import logo from '../assets/images/logo.png';
import avatar from '../assets/images/avatar-default.png';

const NavigationDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;

  img {
    height: 50px;
  }

  #user-nav-div {
    display: flex;
    align-items: center;
    margin-right: 10px;

    #user-nav-div-left {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 10px;

      img {
        height: 40px;
        width: 40px;
      }

      #username-nav-span {
        font-size: 14px;
      }
    }

    #triangle-nav {
      align-self: flex-end;
      margin-bottom: 4px;
    }
  }
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;

  ${({pointingUp}) => {
    return pointingUp ? `border-bottom: 10px solid ${mainColor};` : `border-top: 10px solid ${mainColor};`
  }}
`;

function Navigation() {
  return (
    <NavigationDiv>
      <img src={logo} />
      <div id="user-nav-div">
        <div id="user-nav-div-left">
          <img src={avatar} />
          <span id="username-nav-span">John Doe</span>
        </div>
        <Triangle id="triangle-nav" />
      </div>
    </NavigationDiv>
  );
}

export default Navigation;
