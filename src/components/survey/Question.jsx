import React from 'react';
import PropTypes from 'prop-types';
import { StyledQuestion, Close } from './SurveyStyles';
import OptionSelect from '../common/OptionSelect';
import TextArea from '../common/TextArea';

const typeOptions = [
  {
    name: 'Text',
    value: 'text',
  },
  {
    name: 'Rating',
    value: 'rating',
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
      id="closeQuestion"
      onClick={() => removeQuestion(index)}
    >
      ✕
    </Close>

    <TextArea
      label="Question"
      name="question"
      value={question}
      onChange={(e) => handleChangeQuestion(index, e)}
      className="form-control mb-4"
      id="question"
      rows="3"
    />

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
