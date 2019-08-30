import React from 'react';
import PropTypes from 'prop-types';
import { StyledQuestion, Close } from './SurveyStyles';
import OptionSelect from '../common/OptionSelect';

const typeOptions = [
  {
    name: 'Text',
    value: 'Text',
  },
  {
    name: 'Rating',
    value: 'Rating',
  },
];

const Question = ({
  question,
  type,
  index,
  handleChangeQuestion,
  removeQuestion,
}) => (
  <StyledQuestion className="z-depth-1">
    <Close
      type="button"
      className="remove-question"
      onClick={() => removeQuestion(index)}
    >
      ✕
    </Close>
    <div className="form-group">
      <label htmlFor="text">Question</label>
      <textarea
        className="form-control mb-4"
        id="text"
        rows="3"
        name="question"
        onChange={(e) => handleChangeQuestion(index, e)}
        value={question}
      />
    </div>

    <OptionSelect
      label="Question type"
      name="type"
      value={type}
      options={typeOptions}
      onChange={(e) => handleChangeQuestion(index, e)}
      className="browser-default custom-select mb-4"
      id="type"
    />
  </StyledQuestion>
);

Question.propTypes = {
  question: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  handleChangeQuestion: PropTypes.func.isRequired,
  removeQuestion: PropTypes.func.isRequired,
};

export default Question;
