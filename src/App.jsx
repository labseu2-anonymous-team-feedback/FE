import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/signin" component={Signin} />
      <PrivateRoute exact path="/" component={CreateSurvey} />
      {/* <Route exact path="/" component={CreateSurvey} /> */}
    </Router>
  );
}

export default withApollo(App);
