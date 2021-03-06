import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Mutation } from "react-apollo";
import icon from "../../assets/images/icon.svg";
import { ProfileImg, ProfileWrapper, DoubleFields } from "./ProfileStyles";
import DashboardLayout from "../dashboard/layouts/DashboardLayout";
import TextInput from "../common/TextInput";
import TextArea from "../common/TextArea";
import Button from "../../styles/Button";
import { UPDATE_PROFILE } from "../../graphql/mutations";

export class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.user.id || "",
      username: props.user.username || "",
      email: props.user.email || "",
      firstName: props.user.firstName || "",
      lastName: props.user.lastName || "",
      bio: props.user.bio || ""
    };
  }
  change = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { firstName, lastName, username, email, bio } = this.state;
    return (
      <Mutation mutation={UPDATE_PROFILE}>
        {updateProfile => {
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
                    <form
                      action=""
                      method="post"
                      onSubmit={e => {
                        e.preventDefault();
                        console.log(this.state);

                        updateProfile({
                          variables: {
                            firstName,
                            lastName,
                            username,
                            email,
                            bio,
                            profileImage: ""
                          }
                        });
                      }}
                    >
                      <DoubleFields>
                        <div>
                          <TextInput
                            title="First Name"
                            id="firstName"
                            name="firstName"
                            value={firstName}
                            onChange={this.change}
                            type="text"
                            required
                          />
                        </div>
                        <div>
                          <TextInput
                            title="Last Name"
                            id="lastName"
                            name="lastName"
                            value={lastName}
                            onChange={this.change}
                            type="text"
                            required
                          />
                        </div>
                      </DoubleFields>
                      <TextInput
                        title="Username"
                        id="username"
                        name="username"
                        value={username}
                        onChange={this.change}
                        type="username"
                        required
                      />
                      <TextInput
                        title="Email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={this.change}
                        type="email"
                        required
                      />
                      <TextArea
                        label="Bio"
                        id="bio"
                        name="bio"
                        value={bio}
                        onChange={this.change}
                        rows="3"
                        className="form-control mb-4"
                      />
                      <Button
                        className="btn btn-block my-4"
                        id="me"
                        type="submit"
                      >
                        Update Profile
                      </Button>
                    </form>
                  </div>
                </div>
              </ProfileWrapper>
            </DashboardLayout>
          );
        }}
      </Mutation>
    );
  }
}

export default withRouter(Profile);
