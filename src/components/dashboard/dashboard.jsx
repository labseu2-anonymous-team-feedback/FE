import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import avatar from '../../assets/images/avatar-default.png';
import { GET_SURVEYS } from '../../graphql/queries';

import {
  NavigationNav,
  Triangle,
  NavItems,
} from '../common/NavBarStyles';
import { Survey } from '../survey/Survey';

export function Dashboard() {
  const { data, loading, error } = useQuery(GET_SURVEYS);
  if (data.getUserSurveys) {
    return (
      <div>
        <NavigationNav className="navbar fixed-top navbar-dark white scrolling-navbar">
          <div className="logo-div">
            <Link to="/">
              <img alt="logo" src={logo} className="logo" />
            </Link>
          </div>
          <div className="auth-links">
            <div className="dropdown">
              <div
                id="user-nav-div"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <div id="user-nav-div-left">
                  <img alt="avatar" src={avatar} />
                  <div className="user-info">
                    <span id="username-nav-span"></span>
                  </div>
                </div>
                <Triangle id="triangle-nav" />
              </div>
              <div
                className="dropdown-menu dropdown-menu-right border-0 z-depth-1"
                aria-labelledby="user-nav-div"
              >
                <a className="dropdown-item" href="##">
                  Dashboard
                </a>
                <a
                  className="dropdown-item"
                  href="##"
                  // onClick={this.logout}
                >
                  Logout
                </a>
              </div>
            </div>

            <NavItems>
              <Link to="/signup"></Link>
              <Link to="/signin"></Link>
            </NavItems>
          </div>
        </NavigationNav>

        <Survey data={data.getUserSurveys} />
      </div>
    );
  }
  return <div>{loading}</div>;
}

export default Dashboard;
