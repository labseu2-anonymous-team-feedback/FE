import React from 'react';
import { MdKeyboardBackspace } from 'react-icons/md';
import propTypes from 'prop-types';

import { Container } from '../dashboard/DashboardLayoutStyles';
import image from '../assets/images/404.svg';

function NotFound(props) {
  const goHome = (e) => {
    e.preventDefault();
    props.history.push('/');
  };
  return (
    <Container>
      <div>
        <img src={image} alt="Page Not Found" load="lazy" />
      </div>
      <button type="button" onClick={goHome}>
        <MdKeyboardBackspace />
        <span>Home</span>
      </button>
    </Container>
  );
}

NotFound.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
};
export default NotFound;
