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
import TextInput from '../../common/TextInput';
import { trimError, isLoggedIn } from '../../../utils';
import Button from '../../../styles/Button';
import { LoadIngIcon } from '../../feedback/styles';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      error: '',
      data: '',
      isLoading: false,
    };

    this.mutate = props.client.mutate;
  }

  componentDidMount() {
    const { location } = this.props;
    const { search } = location;

    const parsed = queryString.parse(search);
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
    const {
      username, email, password, confirmPassword,
    } = this.state;

    if (password !== confirmPassword) {
      toast('Passwords do not match', {
        className: 'toast-error',
      });
    } else if (username.length < 3) {
      toast('Username must be at least 3 characters long', {
        className: 'toast-error',
      });
    } else if (password.length < 6) {
      toast('Password must be at least 6 characters long', {
        className: 'toast-error',
      });
    } else if (username.length > 30) {
      toast('Username should not be longer than 30 characters', {
        className: 'toast-error',
      });
    } else {
      this.setState({ isLoading: true });
      this.mutate({
        mutation: CREATE_ACCOUNT,
        variables: {
          username,
          email,
          password,
        },
      })
        .then((res) => this.setState({ data: res, isLoading: false }))
        .catch((err) => this.setState({ error: err, isLoading: false }));
    }
  };

  render() {
    const {
      username,
      email,
      password,
      confirmPassword,
      error,
      data,
      isLoading,
    } = this.state;

    const { location } = this.props;
    const { search } = location;
    const parsed = queryString.parse(search);

    const isSignedIn = isLoggedIn();
    if (isSignedIn) {
      return <Redirect to="/" />;
    }

    if (error) {
      if (trimError(error.message) === 'Validation error') {
        toast(error.graphQLErrors[0].extensions.exception.errors[0].message, {
          className: 'toast-error',
        });
      } else {
        toast(trimError(error.message) || 'Unable to Register, Try Again', {
          className: 'toast-error',
        });
      }
    }

    if (parsed.google && data) {
      // Don't show toast error if user is signing in with google
      return <Redirect to="/" />;
    }

    if (data) {
      toast('Registration successful', { className: 'toast-success' });
      return <Redirect to="/" />;
    }

    return (
      <StyledSignup>
        <form onSubmit={this.onSubmit} className="text-center p-5" action="#!">
          <p className="h4 mb-4 f-1">Sign Up</p>
          <TextInput
            type="text"
            title="Username"
            id="username"
            name="username"
            value={username}
            onChange={this.onChange}
            required
          />
          <TextInput
            title="Email"
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={this.onChange}
            required
          />
          <div className="d-flex justify-content-between passwordContainerDiv">
            <div className="passwordContainer">
              <TextInput
                title="Password"
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={this.onChange}
                required
              />
            </div>
            <div className="passwordContainer">
              <TextInput
                title="Confirm Password"
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={this.onChange}
                required
              />
            </div>
          </div>
          <div className="d-flex justify-content-around" />
          <Button className="btn btn-block my-4" id="me" type="submit">
            {isLoading ? 'processing... ' : 'Sign Up'}
            {isLoading && <LoadIngIcon />}
          </Button>
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
            <a href="https://anonymous-feedback-app.herokuapp.com/google">
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
