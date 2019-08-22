import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Signup from './components/auth/signup/Signup';

function App() {
  return (
    <Router>
      <Route exact path="/signup" component={Signup} />
    </Router>
  );
}

export default App;
