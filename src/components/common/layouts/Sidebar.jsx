import React from 'react';
import styled from 'styled-components';

import ProfileImage from '../ProfileImage';
import SideNavItem from './SideNavItem';
import {
  tabletMaxWidth,
  white,
  mediumSpace1,
} from '../../../styles/variables';
import { sidebarIcons, sidebarTexts } from '../../../assets/icons/icons';

const SidebarContainer = () => (
  <StyledSidebar>
    <ProfileImage
      name="Bob Stone"
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1m1DOmfCTW5yaJjjehDNcrTnJlFaph-ZADDYsCsyzwDJWS_6z"
    />
    <div className="nav-items">
      <SideNavItem
        text={sidebarTexts.surveys}
        icon={sidebarIcons.surveys}
        path="/dashboard"
      />
      <SideNavItem
        text={sidebarTexts.settings}
        icon={sidebarIcons.settings}
        path="/profile"
      />
    </div>
    <div className="empty-div" />
  </StyledSidebar>
);

const StyledSidebar = styled.aside`
	min-height: calc(100vh - 100px);
	width: 15rem;

	display: flex;
	flex-direction: column;
	background-color: ${white};

	.nav-items {
		padding: ${mediumSpace1} 0;
	}

	.empty-div {
		flex-grow: 1;
	}

	.grey-logo {
		margin: 0 auto;
		width: 70%;

		img {
			width: 100%;
		}
	}

	@media only screen and (max-width: ${tabletMaxWidth}) {
		display: none;
	}
`;

export default SidebarContainer;
