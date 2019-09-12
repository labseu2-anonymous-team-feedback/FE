import React from 'react';
import { Container } from './styles';
import image from '../../../assets/images/success.svg';

function Success() {
  return (
    <Container>
      <div>
        <p>
          Thank you for taking your time to respond to the survey, the effort is
          greatly appreciated
        </p>
      </div>
      <div>
        <img src={image} alt="success" load="lazy" />
      </div>
    </Container>
  );
}

export default Success;
