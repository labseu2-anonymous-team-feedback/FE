import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import Photo from '../../assets/images/5.jpg';
import {
  Container,
  OtherTextInput,
  InsideContainerLeft,
  InsideContainerRight,
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
      <Container>
        <InsideContainerLeft>
          <div className="user-photo">
            <ProfileImg src={Photo} />
          </div>
          <h3>John Smith</h3>
          <span />
        </InsideContainerLeft>
        <InsideContainerRight>
          <OtherTextInput />
        </InsideContainerRight>
      </Container>
    );
  }
}

export default withRouter(Profile);
