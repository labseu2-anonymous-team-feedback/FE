import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isLoggedIn } from '../../utils';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const isSignedIn = isLoggedIn();
  if (isSignedIn) {
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  }

  return <Redirect to="login" />;
};

// );

PrivateRoute.propTypes = {
  exact: PropTypes.bool,
};

export default PrivateRoute;
