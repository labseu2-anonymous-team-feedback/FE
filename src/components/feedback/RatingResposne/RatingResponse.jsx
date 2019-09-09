import React from 'react';
import propTypes from 'prop-types';
import { Container, Label, Wrapper } from './styles';
import { Text } from '../styles';

import Rating from './Rating';

export default function RatingResponse({ question, handleRating, index }) {
  const onSelect = (event, value) => {
    event.preventDefault();
    const { target } = event;
    let parentNode;
    if (target.tagName === 'SPAN') {
      parentNode = target.parentElement.parentElement;
    } else {
      parentNode = target.parentElement;
    }
    parentNode
      .querySelectorAll('.rating')
      .forEach((el) => el.classList.remove('selected'));
    const parent = target.parentElement;
    if (target.tagName === 'SPAN') {
      parent.classList.add('selected');
      handleRating(value, question.id);
    } else {
      target.classList.add('selected');
      handleRating(value, question.id);
    }
  };
  return (
    <Container>
      <Text>{`${index + 1}. ${question.question}`}</Text>
      <Label>
        <div className="lower">Very Poor</div>
        <div className="upper">Excellent</div>
      </Label>
      <Wrapper>
        {[...new Array(5)].map((_, i) => (

          <Rating
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            value={i + 1}
            selectHandler={(e) => onSelect(e, i + 1)}
            question={question.question}
          />
        ))}
      </Wrapper>
    </Container>
  );
}

RatingResponse.propTypes = {
  question: propTypes.objectOf(propTypes.any).isRequired,
  handleRating: propTypes.func.isRequired,
  index: propTypes.number.isRequired,
};
