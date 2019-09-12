import styled from 'styled-components';
import { tabletMaxWidth } from '../../styles/variables';


export const Container = styled.div`
  width: 100%;
  margin-top: 3rem;
  margin-left: 15rem;
  margin-bottom: 10rem;

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

export const MainContainer = styled.div`
  display: flex;
  @media only screen and (max-width: ${tabletMaxWidth}) {
    flex-direction: column;
  }
`;
