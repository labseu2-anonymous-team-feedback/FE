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
              <input type="text" placeholder="Full name" />
              <h2>Birthday</h2>
              <p>July 21</p>
              <h2>Gender</h2>
              {/* <label htmlFor="R1">Male</label>
              <input type="radio" name="gender" id="R1" value="Male" />
              <label htmlFor="R1">Female</label>
              <input type="radio" name="gender" id="R1" value="Female" /> */}
              <div className="card">
                <ul>
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

              <div className="mail-box">
                <input type="text" placeholder="email" />
                <SurveyButton>Update</SurveyButton>
              </div>
              <div className="password-box">
                <input type="text" placeholder="password" />
                <SurveyButton>Update</SurveyButton>
              </div>
              <label htmlFor="B1">Bio</label>
              <TextArea />
            </div>
          </div>
        </div>
      </MainContainer>
    );
  }
}

export default withRouter(Profile);
