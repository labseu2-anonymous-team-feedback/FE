import React from 'react';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import logo from '../../assets/images/logo.png';
import avatar from '../../assets/images/avatar-default.png';
import { NavigationNav, Triangle } from './NavBarStyles';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
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
    window.location.reload();
  };

  render() {
    const { user } = this.state;
    return (
      <NavigationNav className="navbar fixed-top navbar-dark white scrolling-navbar">
        <img alt="logo" src={logo} />
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
                <span id="username-nav-span">John Doe</span>
              </div>
              <Triangle id="triangle-nav" />
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
          <div>
            <Link to="/signup">Sign Up</Link>
            <Link to="/signin">Sign In</Link>
          </div>
        )}
      </NavigationNav>
    );
  }
}

export default Navigation;
