import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { withApollo } from 'react-apollo';
import { StyledNewPassword } from './StyledResetPassword';
import TextInput from '../../common/TextInput';
import { SET_NEW_PASSWORD } from '../../../graphql/mutations';

class NewPassword extends React.Component {
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
      toast.error('Passwords do not match');
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
          toast.success('Password updated successfully');
          setTimeout(() => {
            this.setState({ redirectHome: true });
          }, 3000);
        })
        .catch(() => {
          toast.error('Failed to reset password');
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
          className="text-center border border-light p-5 z-depth-1"
          action="#!"
          onSubmit={this.submit}
        >
          <p className="h4 mb-4">Enter New Password</p>

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

          <button className="btn btn-info btn-block my-4" type="submit">
            Update Password
          </button>
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
