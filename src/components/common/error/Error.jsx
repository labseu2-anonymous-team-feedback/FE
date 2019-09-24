import React from 'react';
import propTypes from 'prop-types';
import { Container } from '../success/styles';
import image from '../../../assets/images/error.svg';

function ErrorPage({ message }) {
  return (
    <Container>
      <div>
        <p>
          { message }
        </p>
      </div>
      <div>
        <img src={image} alt="Error" load="lazy" />
      </div>
    </Container>
  );
}

ErrorPage.propTypes = {
  message: propTypes.string.isRequired,
};
export default ErrorPage;
