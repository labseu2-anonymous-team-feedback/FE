import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { mainColor, mainColorHover } from '../../styles/variables';

export const AddButton = styled.button`
  font-size: 1.5rem;
  border-radius: 50%;
  padding: 0px;
  width: 4rem;
  height: 4rem;
  text-align: center;
`;

export const Container = styled.div`
  margin: 8rem auto;
  padding-left: 0rem;
  padding-right: 0rem;
  background: white;
  width: 60%;

  @media (max-width: 700px) {
    width: 100% !important;
    padding: 0rem;
    margin: 4.5rem auto;
  }

  .survey-row {
    @media (max-width: 700px) {
      width: 100%;
      margin: 6.5rem auto;
    }
  }

  @media (max-width: 575px) {
    width: 100%;
    margin: 0rem auto;
    border: 1px solid transparent;
  }

  .create-survey-title {
    @media (max-width: 575px) {
      font-size: 1.8rem;
    }
  }

  .questions-title {
    @media (max-width: 575px) {
      font-size: 1.5rem;
    }
  }

  form {
    @media (max-width: 575px) {
      padding-left: 1rem !important;
      padding-right: 1rem !important;
    }
  }
`;

export const StyledQuestion = styled.div`
  padding: 2.5rem 2.5rem 1rem 2.5rem;
  margin: 1rem auto;
  box-shadow: 0px 1px 5px -2px rgba(76,86,87,1) !important;
  position: relative;

  @media (max-width: 575px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  &:hover {
    .remove-question {
      opacity: 1;
    }
  }
`;

export const Close = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  background: white;
  color: #db8a74;
  position: absolute;
  right: 0.75rem;
  top: 0.75rem;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #db8a74;
  transition: all 0.25s ease-in-out;

  &:focus {
    outline: none;
  }

  &:hover {
    background: #db8a74;
    color: white;
    transition: all 0.25s ease-in-out;
  }
`;

export const CancelButton = styled(Link)`
  font-size: 1rem;
  padding: .3em 1em;
  color: white;
  border: 1px solid transparent;
  border-radius: 5px;
  outline: none;
  background: ${mainColor};
  white-space: nowrap;

  &:hover {
    background: ${mainColorHover};
    color: white;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    flex-basis: 48%;
  }
  button:nth-of-type(1) {
    background-color: #FF6938;
  }
`;
