import React from 'react';
import styled from 'styled-components';

const StyledQuestion = styled.div`
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

const Close = styled.button`
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

  &:hover {
    background: #db8a74;
    color: white;
    transition: all 0.25s ease-in-out;
  }
`;

const Question = ({ text, type, index, handleChangeQuestion }) => (
  <StyledQuestion>
    <Close type="button" className="remove-question">
      x
    </Close>
    <div className="form-group">
      <label htmlFor="text">Question</label>
      <textarea
        className="form-control rounded-0"
        id="text"
        rows="3"
        name="text"
        onChange={(e) => handleChangeQuestion(index, e)}
        value={text}
      />
    </div>
    <div className="form-group">
      <label htmlFor="type">Question type</label>
      <select
        name="type"
        onChange={(e) => handleChangeQuestion(index, e)}
        className="browser-default custom-select mb-4"
        id="type"
      >
        <option value="" disabled>
          Choose option
        </option>
        <option value="text">Text</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  </StyledQuestion>
);

export default Question;
