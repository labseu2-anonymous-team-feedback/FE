import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 320px) and (max-width: 768px) {
    flex-direction: column-reverse;
    flex-wrap: nowrap;
  }
  div:nth-of-type(1) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-basis: 30%;
    width: 100%;
    height: 100%;
    p {
      line-height: 32px;
      padding-left: 4rem;
      font-size: 1.6rem;
      text-align: center;
    }
    @media (max-width: 500px) {
      flex-basis: 100%;
      p {
        padding: 3rem;
      }
    }
  }
  div:nth-of-type(2) {
    flex-basis: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    img {
      width: 60%;
      height: 60%;
      object-fit: contain;
    }
    @media (max-width: 500px) {
      flex-basis: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
