import React, { Component } from 'react';
import { Container, MainContainer } from './ResponseStyles';
import SideBar from '../common/Sidebar';


class Response extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <MainContainer>
        <SideBar />
        <Container className="container">
          <h1 className="text-center create-survey-title f-1">
            Response Title
          </h1>

        </Container>
      </MainContainer>

    );
  }
}


export default Response;
