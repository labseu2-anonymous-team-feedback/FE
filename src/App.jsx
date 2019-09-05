import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withApollo } from 'react-apollo';

import Signup from './components/auth/signup/Signup';
import Signin from './components/auth/siginin/Signin';
import Navigation from './components/common/Navigation';
import CreateSurvey from './components/survey/CreateSurvey';
import ResetPassword from './components/auth/resetPassword/ResetPassword';
import ResetPasswordConfirmation from './components/auth/resetPassword/ResetPasswordConfirmation';
import PrivateRoute from './components/common/PrivateRoute';
import NewPassword from './components/auth/resetPassword/NewPassword';
import userDashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Navigation} />
      <Route
        exact
        path="/verify_account/:verifyToken"
        component={Navigation}
      />
      <Route exact path="/register" component={Signup} />
      <Route exact path="/login" component={Signin} />
      <Route exact path="/resetPassword" component={ResetPassword} />
      <Route
        exact
        path="/resetPasswordConfirmation"
        component={ResetPasswordConfirmation}
      />
      <Route
        exact
        path="/password_reset/:resetToken"
        component={NewPassword}
      />
      <Switch>
        <PrivateRoute exact path="/" component={CreateSurvey} />
      </Switch>
      <Route exact path="/dashboard" component={userDashboard} />
    </Router>
  );
}

export default withApollo(App);
