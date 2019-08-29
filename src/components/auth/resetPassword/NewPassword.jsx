import React from 'react';
import { StyledNewPassword } from './StyledResetPassword';

function NewPassword() {
  return (
    <StyledNewPassword>
      <form
        className="text-center border border-light p-5 z-depth-1"
        action="#!"
      >
        <p className="h4 mb-4">Enter New Password</p>

        <div className="form-group">
          <label htmlFor="password" className="d-flex font-weight-bold">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-control mb-4"
            name="password"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="d-flex font-weight-bold">
            Confirm Password
          </label>
          <input
            type="password"
            id="password"
            className="form-control mb-4"
            name="confirmPassword"
            required
          />
        </div>

        <button className="btn btn-info btn-block my-4" type="submit">
          Update Password
        </button>
      </form>
    </StyledNewPassword>
  );
}

export default NewPassword;
