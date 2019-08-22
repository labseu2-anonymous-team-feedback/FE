import React, { Component } from "react";
import { Signup as StyledSignup } from "./StyledSignup";

export default class Signup extends Component {
  componentDidMount() {}

  render() {
    return (
      <StyledSignup>
        <form className="text-center border border-light p-5 w-50" action="#!">
          <p className="h4 mb-4">Sign in</p>

          <label htmlFor="username" className="d-flex text-dark">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="form-control mb-4"
            placeholder="Enter Username"
          />

          <label htmlFor="email" className="d-flex">
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
              <label htmlFor="password" className="d-flex">
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
              <label htmlFor="confirmPassword" className="d-flex">
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

          {/*
    <!-- Social login -->
    <p>or sign in with:</p>

    <a type="button" class="light-blue-text mx-2">
        <i class="fab fa-facebook-f"></i>
    </a>
    <a type="button" class="light-blue-text mx-2">
        <i class="fab fa-twitter"></i>
    </a>
    <a type="button" class="light-blue-text mx-2">
        <i class="fab fa-linkedin-in"></i>
    </a>
    <a type="button" class="light-blue-text mx-2">
        <i class="fab fa-github"></i>
    </a> */}
        </form>
      </StyledSignup>
    );
  }
}
