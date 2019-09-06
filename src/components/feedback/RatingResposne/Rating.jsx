import React from 'react';
import propTypes from 'prop-types';

import { RatingWrapper } from './styles';

export default function Rating({ value, selectHandler }) {
  return (
    <RatingWrapper onClick={(e) => selectHandler(e)} className="rating">
      <span className="circle" />
      <span className="number">{value}</span>
    </RatingWrapper>
  );
}

Rating.propTypes = {
  value: propTypes.string.isRequired,
  selectHandler: propTypes.func.isRequired,
};
