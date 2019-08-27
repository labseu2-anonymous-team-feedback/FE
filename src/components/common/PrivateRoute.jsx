import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

import PropTypes from 'prop-types';

export const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => {
  const token = localStorage.getItem('token');
  if (token) {
    const decodedToken = jwt_decode(token);
    console.log(decodedToken);

    const currentTime = Date.now() / 1000;
    console.log(decodedToken.exp < currentTime);
    if (decodedToken.exp < currentTime) {
      // Logout user
      return <Redirect to="signup" />;
    }
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  }

  return <Redirect to="signup" />;
};

// );

// PrivateRoute.propTypes = {
//     auth: PropTypes.object.isRequired
// }

// const mapStateToProps = state => ({
//     auth: state.auth
// });

export default PrivateRoute;
