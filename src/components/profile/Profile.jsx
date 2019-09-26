import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import icon from '../../assets/images/icon.svg';
import { SurveyButton } from '../dashboard/DashboardStyles';
import { MainContainer, ProfileImg } from './ProfileStyles';
import TextArea from '../common/TextArea';

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
              <h2>Name</h2>
              <p>Guybrush Threepwood </p>
              {/* <input type="text" placeholder="Full name" /> */}
              <form>
                <h2>Birthday</h2>
                {/* <input type="date" name="bday" /> */}
                <p>02.09.1990</p>
              </form>

              <h2>Gender</h2>
              {/* <label htmlFor="R1">Male</label>
              <input type="radio" name="gender" id="R1" value="Male" />
              <label htmlFor="R1">Female</label>
              <input type="radio" name="gender" id="R1" value="Female" /> */}
              <div className="gender-box-wrapper">
                <ul className="gender-box">
                  <li>
                    <label htmlFor="R1">Male</label>
                    <input type="radio" name="name" id="one" />
                  </li>

                  <li>
                    <label htmlFor="R1">Female</label>
                    <input type="radio" name="name" id="two" />
                  </li>
                </ul>
              </div>
              <h2>Current Username</h2>
              <div className="username-box">
                <input type="text" />
                <SurveyButton>Change</SurveyButton>
              </div>
              <h2>Current Email</h2>
              <div className="mail-box">
                <input type="text" />
                <SurveyButton>Change</SurveyButton>
              </div>
              <h2>Current Password</h2>
              <div className="password-box">
                <input type="text" />
                <SurveyButton>Change</SurveyButton>
              </div>
            </div>
            <div className="text-box">
              <h2>Bio</h2>
              <p>About the User</p>
            </div>
          </div>
        </div>
      </MainContainer>
    );
  }
}

export default withRouter(Profile);
