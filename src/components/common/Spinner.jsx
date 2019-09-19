import React from 'react';
import { Triple } from 'react-preloading-component';
import styled from 'styled-components';

const StyledSpinner = styled.div`
  margin: 10rem 0;
`;

export default function Spinner() {
  return (
    <StyledSpinner>
      <Triple color="#63beff" size={80} />
    </StyledSpinner>
  );
}
