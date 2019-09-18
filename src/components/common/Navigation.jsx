import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { withApollo } from 'react-apollo';
import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';
import logo from '../../assets/images/logo.png';
import avatar from '../../assets/images/avatar-default.png';
import { NavigationNav, Triangle, NavItems } from './NavBarStyles';
import { VERIFY_ACCOUNT } from '../../graphql/mutations';
import { MyContext } from '../../Provider';

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
          toast('Account verified successfully', {
            className: 'toast-success',
          });
        })
        .catch(() => {
          toast('Failed to verify account', {
            className: 'toast-error',
          });
        });
    }
    console.log('1=====', token);
    if (token) {
      const user = jwtDecode(token);
      console.log('2=====', user);
      this.setState({ user });
    } else {
      // this.setState({ user: null });
      setTimeout(() => {
        const tokenAwaited = localStorage.getItem('token');
        console.log('4===', tokenAwaited);
        const user = jwtDecode(tokenAwaited);
        this.setState({ user });
      }, 2000);
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
    console.log('3======', this.state);
    return (
      <MyContext.Consumer>
        {(context) => (
          <NavigationNav className="navbar fixed-top navbar-dark white scrolling-navbar">
            <i className="fas fa-bars" onClick={context.toggleSidebar} />
            <div className="logo-div">
              <Link to="/">
                <img alt="logo" src={logo} className="logo" />
              </Link>
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
                    <a
                      className="dropdown-item"
                      id="logoutButton"
                      href="##"
                      onClick={this.logout}
                    >
                      Logout
                    </a>
                  </div>
                </div>
              ) : (
                <NavItems>
                  <Link to="/register">Sign Up</Link>
                  <Link to="/login">Sign In</Link>
                </NavItems>
              )}
            </div>
          </NavigationNav>
        )}
      </MyContext.Consumer>
    );
  }
}

Navigation.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      verifyToken: PropTypes.string,
    }),
  }).isRequired,
  client: PropTypes.shape({
    mutate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(withApollo(Navigation));
