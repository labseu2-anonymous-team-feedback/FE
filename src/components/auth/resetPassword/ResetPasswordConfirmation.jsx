import React from 'react';
import { Link } from 'react-router-dom';
import ResetPasswordDiv from './StyledResetPassword';

function ResetPasswordConfirmation() {
  return (
    <ResetPasswordDiv>
      <div className="confirmContainer text-center p-5">
        <p className="h4 mb-4 f-1">Password Reset Email sent</p>
        <p className="mb-4">
          Please check your email address for directions on how to reset your
          email
        </p>

        <Link to="/">
          <u>Return to home page</u>
        </Link>
      </div>
    </ResetPasswordDiv>
  );
}

export default ResetPasswordConfirmation;
