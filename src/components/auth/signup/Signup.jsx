import React, { Component } from 'react';
import { Signup as StyledSignup } from './StyledSignup';


export default class Signup extends Component {
  render() {
    return (
      <StyledSignup>
        <input type="text" placeholder="Enter Username" />
        <input type="email" placeholder="Enter Email" />
        <input type="password" placeholder="Enter Password" />
      </StyledSignup>
    );
  }
}
