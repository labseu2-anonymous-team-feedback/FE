import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Signup as StyledSignup } from "./StyledSignup";

export default class Signup extends Component {
  componentDidMount() {}

  render() {
    return (
      <StyledSignup>
        <form
          className="text-center border border-light p-5 w-50 z-depth-1"
          action="#!"
        >
          <p className="h4 mb-4">Sign in</p>

          <label htmlFor="username" className="d-flex font-weight-bold">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="form-control mb-4"
            placeholder="Enter Username"
          />

          <label htmlFor="email" className="d-flex font-weight-bold">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-control mb-4"
            placeholder="E-mail"
          />

          <div className="d-flex justify-content-between">
            <div className="passwordContainer">
              <label htmlFor="password" className="d-flex font-weight-bold">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control mb-4"
                placeholder="Password"
              />
            </div>

            <div className="passwordContainer">
              <label htmlFor="confirmPassword" className="d-flex font-weight-bold">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="form-control mb-4"
                placeholder="Confirm Password"
              />
            </div>
          </div>

          <div className="d-flex justify-content-around" />

          <button className="btn btn-info btn-block my-4" type="submit">
            Sign Up
          </button>

          <p>
            Already have an account? &nbsp;
            <Link to="/login">Sign In</Link>
          </p>

          <div className="dividerContainer">
            <div className="divider">
              <hr />
            </div>
            <p className="font-weight-bold">OR</p>
            <div className="divider">
              <hr />
            </div>
          </div>
        </form>
      </StyledSignup>
    );
  }
}
