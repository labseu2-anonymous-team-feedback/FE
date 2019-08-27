import React from "react";
import { Route, Redirect } from "react-router-dom";
import jwtDecode from "jwt-decode";

import PropTypes from "prop-types";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token");
  if (token) {
    const decodedToken = jwtDecode(token);
    console.log(decodedToken);

    const currentTime = Date.now() / 1000;
    console.log(decodedToken.exp < currentTime);
    if (decodedToken.exp < currentTime) {
      // Logout user
      return <Redirect to="login" />;
    }
    return <Route {...rest} render={props => <Component {...props} />} />;
  }

  return <Redirect to="login" />;
};

// );

PrivateRoute.propTypes = {
  exact: PropTypes.bool
};


export default PrivateRoute;
