import styled from 'styled-components';
import { mainColor } from '../../styles/variables';

export const NavigationNav = styled.nav`
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

export const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 10px solid ${mainColor};
`;
