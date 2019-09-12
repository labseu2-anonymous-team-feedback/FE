import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { withApollo } from 'react-apollo';
import { StyledNewPassword } from './StyledResetPassword';
import TextInput from '../../common/TextInput';
import { SET_NEW_PASSWORD } from '../../../graphql/mutations';
import Button from '../../../styles/Button';

export class NewPassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newPassword: '',
      newPasswordConfirm: '',
      redirectHome: false,
    };
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  submit = (e) => {
    e.preventDefault();
    const { newPassword, newPasswordConfirm } = this.state;
    const {
      match: { params },
    } = this.props;
    const { client } = this.props;

    if (newPasswordConfirm !== newPassword) {
      toast('Passwords do not match', { className: 'toast-error' });
    } else if (newPassword.length < 6) {
      toast('Password must be at least 6 characters long', {
        className: 'toast-error',
      });
    } else {
      client
        .mutate({
          mutation: SET_NEW_PASSWORD,
          variables: {
            newPassword,
            token: params.resetToken,
          },
        })
        .then(() => {
          toast('Password updated successfully', { className: 'toast-success' });
          setTimeout(() => {
            this.setState({ redirectHome: true });
          }, 3000);
        })
        .catch(() => {
          toast('Failed to reset password', { className: 'toast-error' });
        });
    }
  };

  render() {
    const { newPassword, newPasswordConfirm, redirectHome } = this.state;

    if (redirectHome) {
      return <Redirect to="/login" />;
    }

    return (
      <StyledNewPassword>
        <form
          className="text-center p-5"
          action="#!"
          onSubmit={this.submit}
        >
          <p className="h4 mb-4 f-1">Enter New Password</p>

          <TextInput
            title="Password"
            id="newPassword"
            type="password"
            name="newPassword"
            value={newPassword}
            onChange={this.onChange}
            required
          />
          <TextInput
            title="Confirm Password"
            id="password"
            type="password"
            name="newPasswordConfirm"
            value={newPasswordConfirm}
            onChange={this.onChange}
            required
          />

          <Button className="btn btn-block my-4" type="submit">
            Update Password
          </Button>
        </form>
      </StyledNewPassword>
    );
  }
}

NewPassword.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      resetToken: PropTypes.string,
    }),
  }).isRequired,
  client: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withApollo(NewPassword);
