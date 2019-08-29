import React from 'react';
import { Link } from 'react-router-dom';
import ResetPasswordDiv from './StyledResetPassword';

function ResetPasswordConfirmation() {
  return (
    <ResetPasswordDiv>
      <div className="confirmContainer text-center border border-light p-5 z-depth-1">
        <p className="h4 mb-4">Password Reseted</p>
        <p className="mb-4">Check your email</p>

        <Link to="/">
          <u>Return to home page</u>
        </Link>
      </div>
    </ResetPasswordDiv>
  );
}

export default ResetPasswordConfirmation;
