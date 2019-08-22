import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Signup from './components/auth/signup/Signup';
import Navigation from './components/common/Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <Route exact path="/signup" component={Signup} />
    </Router>
  );
}

export default App;
