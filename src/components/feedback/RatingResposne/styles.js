import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
`;
export const Label = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div:first-of-type {
    color: red;
  }
  div:nth-of-type(2) {
    color: green;
  }
`;

export const Wrapper = styled.div`
  border: 1px solid #43bccd;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 0.5rem;
`;

export const RatingWrapper = styled.div`
  padding: 0.5rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #43bccd;
  transition: all 0.2s ease-in-out;
  z-index: 1000;
  &:hover {
    cursor: pointer;
  }
  &.selected {
    background: #43bccd;
    color: white;
    transition: background-color 0.2s ease-in-out;
  }
  @media (max-width: 500px) {
    width: 22px;
    height: 22px;
  }
`;
