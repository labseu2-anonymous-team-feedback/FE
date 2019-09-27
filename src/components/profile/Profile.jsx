import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import jwtDecode from "jwt-decode";
import icon from "../../assets/images/icon.svg";
import {
  MainContainer,
  ProfileImg,
  ProfileButton,
  ProfileWrapper,
  DoubleFields
} from "./ProfileStyles";
import DashboardLayout from "../dashboard/layouts/DashboardLayout";
import TextInput from "../common/TextInput";
import Button from "../../styles/Button";

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwtDecode(token);
      this.setState({ user });
    }
  }

  render() {
    const { user } = this.state;
    return (
      <DashboardLayout>
        <ProfileWrapper>
          <div className="page-title">
            <h2>Complete your profile</h2>
          </div>
          <div className="page-content">
            <div className="left-div">
              <ProfileImg src={icon} />
            </div>
            <div className="right-div">
              <DoubleFields>
                <div>
                  <TextInput
                    title="First Name"
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                  />
                </div>
                <div>
                  <TextInput
                    title="Last Name"
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                  />
                </div>
              </DoubleFields>
              <TextInput
                title="Username"
                id="username"
                name="username"
                type="username"
                required
              />
              <TextInput
                title="Email"
                id="email"
                name="email"
                type="email"
                required
              />
              <TextInput
                title="Previous Password"
                id="prevPassword"
                name="prevPassword"
                type="password"
                required
              />
              <DoubleFields>
                <div>
                  <TextInput
                    title="New Password"
                    id="password"
                    name="password"
                    type="password"
                    required
                  />
                </div>
                <div>
                  <TextInput
                    title="Confirm New Password"
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required
                  />
                </div>
              </DoubleFields>
              <Button className="btn btn-block my-4" id="me" type="submit">
                Update Profile
              </Button>
            </div>
          </div>
        </ProfileWrapper>
      </DashboardLayout>
    );
  }
}

export default withRouter(Profile);
