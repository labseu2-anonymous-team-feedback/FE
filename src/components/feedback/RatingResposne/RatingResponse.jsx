import React from 'react';
import propTypes from 'prop-types';
import { Container, Label, Wrapper } from './styles';
import { Text } from '../styles';

import Rating from './Rating';

export default function RatingResponse({ question, handleRating, index }) {
  const onSelect = (e, value) => {
    e.preventDefault();
    document.querySelectorAll('.rating').forEach((el) => el.classList.remove('selected'));
    const parent = e.target.parentElement;
    if (e.target.tagName === 'SPAN') {
      parent.classList.add('selected');
      handleRating(value, question.id);
    } else {
      e.target.classList.add('selected');
      handleRating(value, question.id);
    }
  };
  return (
    <Container>
      <Text>
        {`${index + 1}. ${question.question}` }
      </Text>
      <Label>
        <div className="lower">Very Poor</div>
        <div className="upper">Excellent</div>
      </Label>
      <Wrapper>
        { [...new Array(5)].map((_, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <Rating key={i} value={i + 1} selectHandler={(e) => onSelect(e, i + 1)} />
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
