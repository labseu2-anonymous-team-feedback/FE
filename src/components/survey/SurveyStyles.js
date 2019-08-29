import styled from 'styled-components';

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
  box-shadow: 0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important;
  width: 60%;

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
