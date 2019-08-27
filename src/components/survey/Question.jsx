import React from 'react';
import PropTypes from 'prop-types';
import { StyledQuestion, Close } from './SurveyStyles';

const Question = ({
  text,
  type,
  index,
  handleChangeQuestion,
  removeQuestion,
}) => (
  <StyledQuestion>
    <Close
      type="button"
      className="remove-question"
      onClick={() => removeQuestion(index)}
    >
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
        value={type}
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

Question.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  handleChangeQuestion: PropTypes.func.isRequired,
  removeQuestion: PropTypes.func.isRequired,
};

export default Question;
