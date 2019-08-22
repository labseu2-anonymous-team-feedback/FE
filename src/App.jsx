import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Signup from './components/auth/signup/Signup';

function App() {
  return (
    <Router>
      <Signup />
    </Router>
  );
}

export default App;
