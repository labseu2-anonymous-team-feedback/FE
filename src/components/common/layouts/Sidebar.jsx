import React from 'react';
import ProfileImage from '../ProfileImage';
import SideNavItem from './SideNavItem';
import { sidebarIcons, sidebarTexts } from '../../../assets/icons/icons';
import { StyledSidebar } from './DashboardLayoutStyles';

const SidebarContainer = () => (
  <StyledSidebar>
    <ProfileImage
      name="Bob Stone"
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1m1DOmfCTW5yaJjjehDNcrTnJlFaph-ZADDYsCsyzwDJWS_6z"
    />
    <div className="nav-items">
      <SideNavItem
        text={sidebarTexts.create_survey}
        icon={sidebarIcons.create_survey}
        path="/create_survey"
      />
    </div>
    <div className="empty-div" />
  </StyledSidebar>
);

export default SidebarContainer;
