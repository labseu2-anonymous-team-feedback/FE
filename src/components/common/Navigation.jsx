import React from 'react';
import styled from 'styled-components';
import { mainColor } from '../../styles/variables';
import logo from '../../assets/images/logo.png';
import avatar from '../../assets/images/avatar-default.png';

const NavigationNav = styled.nav`
  img {
    height: 50px;
  }

  #user-nav-div {
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    cursor: pointer;

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
  border-top: 10px solid ${mainColor};
`;

function Navigation() {
  return (
    <NavigationNav className="navbar fixed-top navbar-dark white scrolling-navbar">
      <img alt="logo" src={logo} />
      <div className="dropdown">
        <button type="button" id="user-nav-div" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <div id="user-nav-div-left">
            <img alt="avatar" src={avatar} />
            <span id="username-nav-span">John Doe</span>
          </div>
          <Triangle id="triangle-nav" />
        </button>
        <div className="dropdown-menu dropdown-menu-right border-0 z-depth-1" aria-labelledby="user-nav-div">
          <a className="dropdown-item" href="#">Dashboard</a>
          <a className="dropdown-item" href="#">Logout</a>
        </div>
      </div>
    </NavigationNav>
  );
}

export default Navigation;
