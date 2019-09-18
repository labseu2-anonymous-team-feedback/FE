import React from 'react';
import { Container, MainContainer } from './DashboardLayoutStyles';
import SideBar from '../sidebar/Sidebar';


const DashboardLayout = (
	{ children } // eslint-disable-line
) => (
  <MainContainer>
    <SideBar />
    <Container className="container">{children}</Container>
  </MainContainer>
);

export default DashboardLayout;
