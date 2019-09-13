import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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

const StyledNavItem = styled.div`
  display: flex;
  align-items: center;

  span.label {
    display: flex;
    align-items: center;
  }

  a {
    display: block;
    width: 100%;
    padding: 1rem;
    padding-left: 1.4rem;
    border-bottom: 1px solid #cfedfe;
    text-decoration: none;
    color: #444;
    line-height: 1.4rem;
  }

  &:hover a {
    color: blue;
    background: #dbf2ff;
  }
`;

export default SideNavItem;
