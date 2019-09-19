import React from 'react';
import jwtDecode from 'jwt-decode';
import ProfileImage from '../../common/ProfileImage';
import SideNavItem from './SideNavItem';
import { sidebarIcons, sidebarTexts } from '../../../assets/icons/icons';
import { StyledSidebar } from './DashboardLayoutStyles';
import { MyContext } from '../../../Provider';

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
      <MyContext.Consumer>
        {(context) => (
          <StyledSidebar className={context.sidebarOpen ? 'active' : ''}>
            <ProfileImage
              name={user && user.username}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1m1DOmfCTW5yaJjjehDNcrTnJlFaph-ZADDYsCsyzwDJWS_6z"
            />
            <div className="nav-items" role="presentation" onClick={context.toggleSidebar}>
              <SideNavItem
                text={sidebarTexts.create_survey}
                icon={sidebarIcons.create_survey}
                path="/create_survey"
              />

              <div id="logout" role="presentation" onClick={context.logout}>
                <SideNavItem
                  text="Logout"
                  icon={sidebarIcons.logout}
                  path="/"
                />
              </div>

            </div>
            <div className="empty-div" />
          </StyledSidebar>
        )}
      </MyContext.Consumer>
    );
  }
}

export default SidebarContainer;
