import React, { useState } from 'react';
import { withApollo } from 'react-apollo';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { LOGIN_MUTATION } from '../../../graphql/mutations';
import GoogleButton from '../../../assets/images/google-button.png';
import StyledSignin from './StyledSignin';

function Signin({ client }) {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const email = React.createRef();
  const password = React.createRef();

  const { mutate } = client;

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await mutate({
        mutation: LOGIN_MUTATION,
        variables: {
          email: email.current.value,
          password: password.current.value,
        },
      });

      if (!res.data.userLogin) setError(true);
      else {
        localStorage.setItem('token', res.data.userLogin.token);
        localStorage.setItem('username', res.data.userLogin.username);
        setSuccess(true);
      }
    } catch (err) {
      setError(true);
    }
  };

  if (error) {
    toast.error('Unable to Login, Try Again');
  }

  if (success) {
    return <Redirect to="/" />;
  }

  return (
    <StyledSignin>
      <form
        className="text-center border border-light p-4 z-depth-1"
        action="#!"
        onSubmit={onSubmit}
      >
        <p className="h4 mb-4">Sign In</p>

        <div className="form-group">
          <label htmlFor="email" className="d-flex font-weight-bold">
            Email
          </label>
          <input
            ref={email}
            type="email"
            id="email"
            className="form-control"
            placeholder="E-mail"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="d-flex font-weight-bold">
            Password
          </label>
          <input
            ref={password}
            type="password"
            id="password"
            className="form-control"
            placeholder="Password"
            required
          />
        </div>

        <div className="form-group my-4">
          <button className="btn btn-info btn-block" type="submit">
            Sign In
          </button>
        </div>

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
        </div>

        <p>
          <Link to="/forgotpassword">Forgot Password?</Link>
        </p>

        <p>
          No Account yet? &nbsp;
          <Link to="/register">Create Account</Link>
        </p>
        <p>
          Don&apos;t have an account? &nbsp;
          <Link to="/register">
            <u>Sign Up</u>
          </Link>
        </p>
      </form>
    </StyledSignin>
  );
}

Signin.propTypes = {
  client: PropTypes.shape({
    mutate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withApollo(Signin);
