import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { withApollo } from 'react-apollo';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import {
  CREATE_ACCOUNT,
  GOOGLE_AUTH_MUTATION,
} from '../../../graphql/mutations';
import StyledSignup from './StyledSignup';
import GoogleButton from '../../../assets/images/google-button.png';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      error: '',
      data: '',
    };

    this.mutate = props.client.mutate;
  }

  componentDidMount() {
    const { location } = this.props;
    const { search } = location;
    const parsed = queryString.parse(search);
    console.log(parsed);
    if (parsed.google) {
      this.mutate({
        mutation: GOOGLE_AUTH_MUTATION,
      })
        .then((res) => {
          const { token } = res.data.authGoogle;

          localStorage.setItem('token', token);
          this.setState({ data: res });
        })
        .catch((err) => this.setState({ error: err }));
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, error: '' });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { username, email, password } = this.state;
    this.mutate({
      mutation: CREATE_ACCOUNT,
      variables: {
        username,
        email,
        password,
      },
    })
      .then((res) => this.setState({ data: res }))
      .catch((err) => this.setState({ error: err }));
  };

  render() {
    const { error, data } = this.state;

    if (error) {
      toast.error('Unable to Register, Try Again');
    }

    if (data) {
      toast.success('Registration successful');
      return <Redirect to="/" />;
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
            className="form-control mb-3"
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
            className="form-control mb-3"
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
            <a
              href="https://anonymous-feedback-app.herokuapp.com/google"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GoogleButton} alt="Sign up with google" />
            </a>
          </div>
          <p>
            Already have an account? &nbsp;
            <Link to="/login">
              <u>Sign In</u>
            </Link>
          </p>
        </form>
      </StyledSignup>
    );
  }
}

Signup.propTypes = {
  client: PropTypes.shape({
    mutate: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
};
export default withApollo(Signup);
