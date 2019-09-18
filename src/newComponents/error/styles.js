import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #fff;
  justify-content: center;
  align-items: center;
   flex-direction: column;
  button {
    width: 150px;
    border: 1px solid #63beff;
    padding: 0.5rem;
    margin: 2rem;
    font-size: 1.6rem;
    color: #63beff;
    outline: 0;
    font-weight: 500;
    background-color: transparent;
    &:hover {
      color: #fff;
      background-color:#63beff;
      transition: 0.5s ease-in-out;
    }
    span {
      padding-left: 0.8rem;
    }
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    img {
      width: 60%;
      height: 60%;
      object-fit: contain;
    }
  }
`;
