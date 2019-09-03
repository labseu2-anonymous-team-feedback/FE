import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withApollo } from 'react-apollo';
import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';
import logo from '../../assets/images/logo.png';
import avatar from '../../assets/images/avatar-default.png';
import { NavigationNav, Triangle, NavItems } from './NavBarStyles';
import { VERIFY_ACCOUNT } from '../../graphql/mutations';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    const {
      match: { params },
    } = this.props;
    const { client } = this.props;

    if (params && params.verifyToken) {
      client
        .mutate({
          mutation: VERIFY_ACCOUNT,
          variables: {
            token: params.verifyToken,
          },
        })
        .then(() => {
          toast.success('Account verified successfully');
        })
        .catch(() => {
          toast.error('Failed to verify account');
        });
    }

    if (token) {
      const user = jwtDecode(token);
      this.setState({ user });
    } else {
      this.setState({ user: null });
    }
  }

  logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    this.setState({ user: null });
    window.location.reload();
  };

  render() {
    const { user } = this.state;
    return (
      <NavigationNav className="navbar fixed-top navbar-dark white scrolling-navbar">
        <div className="logo-div">
          <img alt="logo" src={logo} />
        </div>
        <div className="auth-links">
          {user ? (
            <div className="dropdown">
              <button
                type="button"
                id="user-nav-div"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <div id="user-nav-div-left">
                  <img alt="avatar" src={avatar} />
                  <div className="user-info">
                    <span id="username-nav-span">{user.username}</span>
                    <Triangle id="triangle-nav" />
                  </div>
                </div>
              </button>
              <div
                className="dropdown-menu dropdown-menu-right border-0 z-depth-1"
                aria-labelledby="user-nav-div"
              >
                <a className="dropdown-item" href="##">
                  Dashboard
                </a>
                <a className="dropdown-item" href="##" onClick={this.logout}>
                  Logout
                </a>
              </div>
            </div>
          ) : (
            <NavItems>
              <Link to="/signup">Sign Up</Link>
              <Link to="/signin">Sign In</Link>
            </NavItems>
          )}
        </div>
      </NavigationNav>
    );
  }
}

Navigation.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      verifyToken: PropTypes.string,
    }),
  }).isRequired,
  client: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withApollo(Navigation);
