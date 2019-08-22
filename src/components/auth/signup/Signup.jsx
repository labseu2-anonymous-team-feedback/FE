import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import StyledSignup from './StyledSignup';
import GoogleButton from '../../../assets/images/google-button.png';
import SlackButton from '../../../assets/images/slack-button.png';

export default class Signup extends Component {
  componentDidMount() {}

  render() {
    return (
      <StyledSignup>
        <form
          className="text-center border border-light p-5 z-depth-1"
          action="#!"
        >
          <p className="h4 mb-4">Sign Up</p>

          <label htmlFor="username" className="d-flex font-weight-bold">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="form-control mb-4"
            placeholder="Enter Username"
            required
          />

          <label htmlFor="email" className="d-flex font-weight-bold">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-control mb-4"
            placeholder="E-mail"
            required
          />

          <div className="d-flex justify-content-between passwordContainerDiv">
            <div className="passwordContainer">
              <label htmlFor="password" className="d-flex font-weight-bold">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control mb-4"
                placeholder="Password"
                required
              />
            </div>

            <div className="passwordContainer">
              <label
                htmlFor="confirmPassword"
                className="d-flex font-weight-bold"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="form-control mb-4"
                placeholder="Confirm Password"
                required
              />
            </div>
          </div>

          <div className="d-flex justify-content-around" />

          <button className="btn btn-info btn-block my-4" type="submit">
            Sign Up
          </button>

          <div className="dividerContainer">
            <div className="divider">
              <hr />
            </div>
            <p className="font-weight-bold text-muted">OR</p>
            <div className="divider">
              <hr />
            </div>
          </div>

          <div className="d-flex optionalLoginContainer">
            <div className="optional-login">
              <a href="##">
                <img src={GoogleButton} alt="Sign up with google" />
              </a>
            </div>

            <div className="optional-login">
              <a href="##">
                <img src={SlackButton} alt="Sign up with slack" />
              </a>
            </div>
          </div>

          <p>
            Already have an account? &nbsp;
            <Link to="/signin">
              <u>Sign In</u>
            </Link>
          </p>
        </form>
      </StyledSignup>
    );
  }
}
