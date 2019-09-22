import React from 'react';
import PropTypes from 'prop-types';
import { TextResponseWrapper, Text, TextArea } from './styles';


export default function TextResponse({
  question,
  changeHandler,
  index,
}) {
  return (
    <TextResponseWrapper>
      <Text>{`${index + 1}. ${question.question}`}</Text>
      <TextArea onChange={(e) => changeHandler(e, question.id)} />
    </TextResponseWrapper>
  );
}

TextResponse.propTypes = {
  changeHandler: PropTypes.func.isRequired,
  question: PropTypes.objectOf(PropTypes.any).isRequired,
  index: PropTypes.number.isRequired,
};
