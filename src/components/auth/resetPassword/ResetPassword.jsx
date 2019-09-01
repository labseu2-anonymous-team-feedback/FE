import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import { toast } from 'react-toastify'; // eslint-disable-line
import ResetPasswordDiv from './StyledResetPassword';
import TextInput from '../../common/TextInput';
import { SEND_RESET_PASSWORD_EMAIL } from '../../../graphql/mutations';

function ResetPassword() {
  const [email, setEmail] = useState('');

  const onChange = (e) => setEmail(e.target.value);

  return (
    <Mutation mutation={SEND_RESET_PASSWORD_EMAIL}>
      {(sendResetPasswordEmail) => (
        <ResetPasswordDiv>
          <form
            className="text-center border border-light p-5 z-depth-1"
            action="#!"
            onSubmit={(e) => {
              e.preventDefault();
              sendResetPasswordEmail({
                variables: {
                  email,
                },
              })
                .then((msg) => {
                  console.log('Email sent: ', msg);
                })
                .catch((err) => {
                  console.log('Failed to sent: ', err);
                });
            }}
          >
            <p className="h4 mb-4">Reset Password</p>
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

            <button className="btn btn-info btn-block my-4" type="submit">
              Reset Password
            </button>
          </form>
        </ResetPasswordDiv>
      )}
    </Mutation>
  );
}

export default ResetPassword;
