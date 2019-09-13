import styled from 'styled-components';
import { tabletMaxWidth } from '../../../styles/variables';

export const MainContainer = styled.div`
  display: flex;
  margin-top: 100px;
  height: calc(100vh - 100px);
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;

  @media only screen and (max-width: ${tabletMaxWidth}) {
    flex-direction: column;
  }
`;

export const Container = styled.div`

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
