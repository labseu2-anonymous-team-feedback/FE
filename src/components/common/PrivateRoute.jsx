/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isLoggedIn } from '../../utils';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isSignedIn = isLoggedIn();
  if (isSignedIn) {
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  }
  return <Redirect to="/login" />;
};

PrivateRoute.defaultProps = {
  exact: false,
};

PrivateRoute.propTypes = {
  exact: PropTypes.bool,
  component: PropTypes.shape({
    _ctor: PropTypes.func.isRequired,
  }).isRequired,
};

export default PrivateRoute;
