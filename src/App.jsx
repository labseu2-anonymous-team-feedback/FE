import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { withApollo } from 'react-apollo';

import Navigation from './components/common/Navigation';
import PrivateRoute from './components/common/PrivateRoute';

const Signup = React.lazy(() =>
  import('./components/auth/signup/Signup'));

const Signin = React.lazy(() =>
  import('./components/auth/siginin/Signin'));

const userDashboard = React.lazy(() =>
  import('./components/dashboard/dashboard'));

const CreateSurvey = React.lazy(() =>
  import('./components/survey/CreateSurvey'));

const ResetPassword = React.lazy(() =>
  import('./components/auth/resetPassword/ResetPassword'));

const ResetPasswordConfirmation = React.lazy(() =>
  import('./components/auth/resetPassword/ResetPasswordConfirmation'));

const NewPassword = React.lazy(() =>
  import('./components/auth/resetPassword/NewPassword'));

function App() {
  return (
    <Router>
      <React.Suspense fallback={<p>Please wait</p>}>
        <Route exact path="/" component={Navigation} />
        <Route
          exact
          path="/verify_account/:verifyToken"
          component={Navigation}
        />
        <Route exact path="/register" component={Signup} />
        <Route exact path="/login" component={Signin} />
        <Route
          exact
          path="/resetPassword"
          component={ResetPassword}
        />
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
      </React.Suspense>
    </Router>
  );
}

export default withApollo(App);
