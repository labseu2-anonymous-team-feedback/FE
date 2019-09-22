import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { StyledNavItem } from './DashboardLayoutStyles';

const SideNavItem = ({ icon, text, path }) => (
  <StyledNavItem>
    <NavLink to={path} activeClassName="active-nav">
      <span className="label">
        <i className="material-icons">{icon}</i>
        &nbsp; &nbsp;
        <span>{text}</span>
      </span>
    </NavLink>
  </StyledNavItem>
);

SideNavItem.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default SideNavItem;
