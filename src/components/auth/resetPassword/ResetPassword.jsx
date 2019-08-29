import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import ResetPasswordDiv from './StyledResetPassword';

function ResetPassword() {
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const email = React.createRef();

  const onSubmit = (e) => {
    e.preventDefault();
    // if password will be reseted
    setSuccess(true);
    // else setError to true
  };

  if (success) {
    return <Redirect to="/resetPasswordConfirmation" />;
  }

  if (error) {
    toast.error('Wrong email address');
    setError(false);
  }

  return (
    <ResetPasswordDiv>
      <form
        className="text-center border border-light p-5 z-depth-1"
        action="#!"
        onSubmit={onSubmit}
      >
        <p className="h4 mb-4">Reset Password</p>

        <label htmlFor="email" className="d-flex font-weight-bold">
          Email
        </label>
        <input
          ref={email}
          type="email"
          id="email"
          className="form-control mb-4"
          placeholder="E-mail"
          required
        />

        <button className="btn btn-info btn-block my-4" type="submit">
          Reset Password
        </button>
      </form>
    </ResetPasswordDiv>
  );
}

export default ResetPassword;
