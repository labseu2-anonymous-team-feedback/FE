import React from 'react';
import { Container } from './styles';
import image from '../../../assets/images/success-image.png';

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
        <img src={image} alt="success" />
      </div>
    </Container>
  );
}

export default Success;
