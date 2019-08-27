import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withApollo } from 'react-apollo';

import Signup from './components/auth/signup/Signup';
import Signin from './components/auth/siginin/Signin';
import Navigation from './components/common/Navigation';
import CreateSurvey from './components/survey/CreateSurvey';
import PrivateRoute from './components/common/PrivateRoute';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/register" component={Signup} />
        <Route exact path="/login" component={Signin} />
        <PrivateRoute exact path="/" component={CreateSurvey} />
      </Switch>
    </Router>
  );
}

export default withApollo(App);
