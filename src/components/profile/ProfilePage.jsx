import React, { Component } from "react";
import { Query } from "react-apollo";
import jwtDecode from "jwt-decode";
import { withRouter } from "react-router-dom";
import { Profile } from "./Profile";
import { GET_USER_BY_ID } from "../../graphql/queries";

class ProfilePage extends Component {
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
      <Query query={GET_USER_BY_ID} variables={{ userId: user && user.__uuid }}>
        {({ loading, error, data }) => {
          if (loading) return null;
          if (error) return `Error! ${error}`;

          if (data) {
            return <Profile user={data.getUserById} />;
          }
        }}
      </Query>
    );
  }
}
export default withRouter(ProfilePage);
