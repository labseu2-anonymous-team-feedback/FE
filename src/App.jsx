import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Signup from './components/auth/signup/Signup';
import Signin from './components/auth/siginin/Signin';

function App() {
  return (
    <Router>
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/signin" component={Signin} />
    </Router>
  );
}

export default App;
