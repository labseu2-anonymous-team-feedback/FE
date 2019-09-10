import React, { useState } from 'react';
import { withApollo } from 'react-apollo';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { trimError, isLoggedIn } from '../../../utils';
import { LOGIN_MUTATION } from '../../../graphql/mutations';
import GoogleButton from '../../../assets/images/google-button.png';
import StyledSignin from './StyledSignin';
import TextInput from '../../common/TextInput';
import Button from '../../../styles/Button';
import { LoadIngIcon } from '../../feedback/styles';

function Signin({ client }) {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);

  const isSignedIn = isLoggedIn();
  if (isSignedIn) {
    return <Redirect to="/" />;
  }

  const { mutate } = client;

  const onSubmit = async (e) => {
    setLoading(true);

    try {
      e.preventDefault();
      const res = await mutate({
        mutation: LOGIN_MUTATION,
        variables: {
          email,
          password,
        },
      });
      setLoading(false);

      localStorage.setItem('token', res.data.userLogin.token);
      localStorage.setItem('username', res.data.userLogin.username);
      setSuccess(true);
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  };

  if (error) {
    if (trimError(error.message) === 'Validation error') {
      toast(error.graphQLErrors[0].extensions.exception.errors[0].message, {
        className: 'toast-error',
      });
    } else {
      toast(trimError(error.message) || 'Unable to Login, Try Again', {
        className: 'toast-error',
      });
    }
    setError(false);
  }

  if (success) {
    window.location.href = '/';
  }

  return (
    <StyledSignin>
      <form className="text-center  p-4" action="#!" onSubmit={onSubmit}>
        <p className="h4 mb-4 f-1">Sign In</p>

        <TextInput
          title="Email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
        />
        <TextInput
          title="Password"
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="form-group my-4">
          <Button className="btn btn-block" type="submit">
            {isLoading ? 'processing... ' : 'Sign In'}
            {isLoading && <LoadIngIcon />}
          </Button>
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
            <a href="https://anonymous-feedback-app.herokuapp.com/google">
              <img src={GoogleButton} alt="Sign up with google" />
            </a>
          </div>
        </div>

        <p>
          <Link to="/resetPassword">Forgot Password?</Link>
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
