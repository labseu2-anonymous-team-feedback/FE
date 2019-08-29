import React from 'react';
import { StyledNewPassword } from './StyledResetPassword';
import TextInput from '../../common/TextInput';

function NewPassword() {
  return (
    <StyledNewPassword>
      <form
        className="text-center border border-light p-5 z-depth-1"
        action="#!"
      >
        <p className="h4 mb-4">Enter New Password</p>

        <TextInput title="Password" id="password" type="password" name="password" required />
        <TextInput title="Confirm Password" id="password" type="password" name="confirmPassword" required />

        <button className="btn btn-info btn-block my-4" type="submit">
          Update Password
        </button>
      </form>
    </StyledNewPassword>
  );
}

export default NewPassword;
