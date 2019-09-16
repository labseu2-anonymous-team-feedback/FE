import React from 'react';
import jwtDecode from 'jwt-decode';
import ProfileImage from '../../common/ProfileImage';
import SideNavItem from './SideNavItem';
import { sidebarIcons, sidebarTexts } from '../../../assets/icons/icons';
import { StyledSidebar } from './DashboardLayoutStyles';

class SidebarContainer extends React.Component {
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
    } else {
      this.setState({ user: null });
    }
  }

  render() {
    const { user } = this.state;
    return (
      <StyledSidebar>
        <ProfileImage
          name={user && user.username}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1m1DOmfCTW5yaJjjehDNcrTnJlFaph-ZADDYsCsyzwDJWS_6z"
        />
        <div className="nav-items">
          <SideNavItem
            text={sidebarTexts.create_survey}
            icon={sidebarIcons.create_survey}
            path="/create_survey"
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
  }
}

export default SidebarContainer;
