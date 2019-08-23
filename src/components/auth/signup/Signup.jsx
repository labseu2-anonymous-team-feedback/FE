import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withApollo } from "react-apollo";
import { Redirect } from "react-router-dom";

import { CREATE_ACCOUNT } from "../../../graphql/mutations";
import StyledSignup from "./StyledSignup";
import GoogleButton from "../../../assets/images/google-button.png";
import SlackButton from "../../../assets/images/slack-button.png";
import { toast } from "react-toastify";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      error: "",
      data: ""
    };

    this.mutate = props.client.mutate;
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value, error: '' });
  }

  onSubmit = e => {
    e.preventDefault();
    this.mutate({
      mutation: CREATE_ACCOUNT,
      variables: {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      }
    })
      .then(res => this.setState({ data: res }))
      .catch(err => this.setState({ error: err }));
  };

  render() {
    if (this.state.error) {
      toast.error("Unable to Register, Try Again");
    }

    if (this.state.data) {
      toast.success("Registration successful");
      return <Redirect to="/signin" />;
    }

    return (
      <StyledSignup>
        <form
          onSubmit={this.onSubmit}
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
            name="username"
            onChange={this.onChange}
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
            name="email"
            onChange={this.onChange}
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
                name="password"
                onChange={this.onChange}
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
                name="confirmPassword"
                onChange={this.onChange}
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
export default withApollo(Signup);
