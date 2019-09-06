import React from 'react';
import PropTypes from 'prop-types';
import { TextResponseWrapper, Text, TextArea } from './styles';


export default function TextResponse({
  question,
  changeHandler,
}) {
  return (
    <TextResponseWrapper>
      <Text>{question}</Text>
      <TextArea onChange={changeHandler} />
    </TextResponseWrapper>
  );
}

TextResponse.propTypes = {
  changeHandler: PropTypes.func.isRequired,
  question: PropTypes.string.isRequired,
};
