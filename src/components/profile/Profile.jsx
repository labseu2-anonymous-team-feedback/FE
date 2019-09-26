import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import icon from '../../assets/images/icon.svg';
import { SurveyButton } from '../dashboard/DashboardStyles';
import {
  MainContainer,
  ProfileImg,
} from './ProfileStyles';

export class Profile extends Component {
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
      console.log(this.state.user);
    }
  }

  render() {
    const { user } = this.state;
    console.log(user);
    return (
      <MainContainer>
        <div className="container">

          <ProfileImg src={icon} />

          <div className="leftbox">
            <nav />
          </div>
          <div className="rightbox">
            <div className="profile">
              <h1>Personal Info</h1>
              <h2>Full Name</h2>
              <p>John Smith </p>
              <h2>Birthday</h2>
              <p>July 21</p>
              <h2>Gender</h2>
              <p>Male</p>
              <h2>Email</h2>
              <p>
                example@example.com
                {' '}
                <SurveyButton>Update</SurveyButton>
              </p>
              <h2>Password </h2>
              <p>
                •••••••
                {' '}
                <SurveyButton>Update</SurveyButton>
              </p>
            </div>
          </div>
        </div>
      </MainContainer>
    );
  }
}

export default withRouter(Profile);
