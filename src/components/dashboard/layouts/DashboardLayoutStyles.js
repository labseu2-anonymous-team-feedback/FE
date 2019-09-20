import styled from 'styled-components';
import { tabletMaxWidth } from '../../../styles/variables';

export const MainContainer = styled.div`
  display: flex;
  margin-top: 100px;
  height: calc(100vh - 100px);

  @media only screen and (max-width: ${tabletMaxWidth}) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  overflow-y: scroll;
  padding: 0px !important;

  @media (max-width: 700px) {
    width: 100% !important;
    padding: 0rem;
    margin: 4.5rem auto;
  }

  @media (max-width: 575px) {
    width: 100%;
    margin: 0rem auto;
    border: 1px solid transparent;
  }
`;

export const StyledSidebar = styled.aside`
	width: 22rem;
	min-height: calc(100vh - 100px);
	display: flex;
	flex-direction: column;
  background: white;
  z-index: 100;


  @media (max-width: 960px) {
    flex: 3;
  }

  #logout {
    display: none;
    @media (max-width: 770px) {
      display: block;
    }
  }
  
  @media (max-width: 770px) {
    position: fixed;
    overflow: hidden;
    transform: translateX(-22rem);
    transition: transform .25s ease-in;

    &.active {
      position: fixed;
      transform: translateX(0rem);
      z-index: 100;
      height: calc(100vh - 100px);
      transition: transform .25s ease-in;
      border: 1px solid #cfedfe;
      border-left: none;
      border-top: none;
    }
  }
  

  .nav-items {
    border-top: 1px solid #cfedfe;
  }
`;

export const StyledNavItem = styled.div`
  display: flex;
  align-items: center;

  span.label {
    display: flex;
    align-items: center;
  }

  a {
    display: block;
    width: 100%;
    padding: 1rem;
    padding-left: 1.4rem;
    border-bottom: 1px solid #cfedfe;
    text-decoration: none;
    color: #444;
    line-height: 1.4rem;
  }

  &:hover a {
    color: #3BA7C9;
    background: #dbf2ff;
  }
`;
