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
  margin-top: 8rem;
`;

export const StyledQuestion = styled.div`
  -webkit-box-shadow: 0px 0px 5px 7px rgba(0, 0, 0, 0.08);
  -moz-box-shadow: 0px 0px 5px 7px rgba(0, 0, 0, 0.08);
  box-shadow: 0px 0px 5px 7px rgba(0, 0, 0, 0.08);

  padding: 2.5rem 2.5rem 1rem 2.5rem;
  margin: 1rem auto;
  position: relative;

  &:hover {
    .remove-question {
      opacity: 1;
    }
  }
`;

export const Close = styled.button`
  opacity: 0;
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
