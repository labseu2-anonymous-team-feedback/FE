import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import avatar from '../../assets/images/avatar-default.png';
import arrow from '../../assets/images/arrow.svg';

import { GET_SURVEYS } from '../../graphql/queries';
import {
  DashboardContainer,
  UserWrapper,
  UserContainer,
  UserStatus,
  UserStatus2,
  UserIcon,
  UserImg,
  Button,
  InputText,
  SurveyInputWrapper,
  InputAndButtonWrapper,
  SurveyWrapper,
  InputButtonWrapper,
  DashboardWrapper,
} from './DashboardStyles';

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
      <DashboardContainer>
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
                    <span id="username-nav-span" />
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
              <Link to="/signup">signin</Link>
              <Link to="/signin">signup</Link>
            </NavItems>
          </div>
        </NavigationNav>

        <DashboardWrapper>
          <UserWrapper>
            <UserContainer>
              <UserIcon>
                <UserImg src={avatar} alt="" />
              </UserIcon>
              <span className="avatar-name">Petar</span>
              <UserStatus>
                <div className="user-status-inner">9 Surveys</div>
                <div className="user-status-inner">4 responses</div>
              </UserStatus>
              <UserStatus2>
                <div className="user-status-inner2">My Surveys</div>
                <div className="user-status-inner2">
                  Profile Settings
                </div>
              </UserStatus2>
            </UserContainer>
          </UserWrapper>

          <SurveyWrapper>
            <SurveyInputWrapper>
              <InputButtonWrapper>
                <InputAndButtonWrapper>
                  <div>
                    <InputText type="text" placeholder="text input" />
                  </div>
                  <div className="button-survey">
                    <Button>Add Survey</Button>
                  </div>
                </InputAndButtonWrapper>
              </InputButtonWrapper>
              <Survey data={data.getUserSurveys} />
            </SurveyInputWrapper>
          </SurveyWrapper>
        </DashboardWrapper>
      </DashboardContainer>
    );
  }
  return <div>{loading}</div>;
}

export default Dashboard;
