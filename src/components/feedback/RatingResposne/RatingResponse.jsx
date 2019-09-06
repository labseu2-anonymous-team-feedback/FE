import React from 'react';
import propTypes from 'prop-types';
import { Container, Label, Wrapper } from './styles';
import { Text } from '../styles';

import Rating from './Rating';

export default function RatingResponse({ question }) {
  const onSelect = (e) => {
    e.preventDefault();
    document.querySelectorAll('.rating').forEach((el) => el.classList.remove('selected'));
    const parent = e.target.parentElement;
    if (e.target.tagName === 'SPAN') {
      parent.classList.add('selected');
    } else {
      e.target.classList.add('selected');
    }
  };
  return (
    <Container>
      <Text>
        { question }
      </Text>
      <Label>
        <div className="lower">Very Poor</div>
        <div className="upper">Excellent</div>
      </Label>
      <Wrapper>
        { [...new Array(10)].map((_, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <Rating key={i} value={i + 1} selectHandler={onSelect} />
        ))}
      </Wrapper>
    </Container>
  );
}

RatingResponse.propTypes = {
  question: propTypes.string.isRequired,
};
