import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import { Redirect, Link } from 'react-router-dom';
import { toast } from 'react-toastify'; // eslint-disable-line
import ResetPasswordDiv from './StyledResetPassword';
import TextInput from '../../common/TextInput';
import { SEND_RESET_PASSWORD_EMAIL } from '../../../graphql/mutations';
import Button from '../../../styles/Button';

export function ResetPassword() {
  const [email, setEmail] = useState('');
  const [redirectReset, setRedirectReset] = useState(false);

  const onChange = (e) => setEmail(e.target.value);

  if (redirectReset) {
    return <Redirect to="/resetPasswordConfirmation" />;
  }

  return (
    <Mutation mutation={SEND_RESET_PASSWORD_EMAIL}>
      {(sendResetPasswordEmail) => (
        <ResetPasswordDiv>
          <form
            className="text-center p-5"
            action="#!"
            onSubmit={(e) => {
              e.preventDefault();
              sendResetPasswordEmail({
                variables: {
                  email,
                },
              })
                .then(() => {
                  setRedirectReset(true);
                })
                .catch(() => {
                  toast('Failed to send reset email password', {
                    className: 'toast-error',
                  });
                })
                .finally(() => setEmail(''));
            }}
          >
            <p className="h4 mb-4 f-1">Reset Password</p>
            <p>
              Enter your email in the input below and we will help you recover
              your password.
            </p>

            <TextInput
              title="Email"
              name="email"
              type="email"
              value={email}
              onChange={onChange}
              id="email"
              className="form-control mb-4"
              required
            />

            <Button className="btn btn-block my-4" type="submit">
              Reset Password
            </Button>

            <p>
              Back to &nbsp;
              <Link to="/login">
                <u>Sign In</u>
              </Link>
            </p>
          </form>
        </ResetPasswordDiv>
      )}
    </Mutation>
  );
}

export default ResetPassword;
