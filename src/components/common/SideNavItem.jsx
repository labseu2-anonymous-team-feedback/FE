import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {
  smallSpace, mediumSpace2, black, blue,
} from '../../styles/variables';

const SideNavItem = ({ icon, text, path }) => (
  <StyledNavItem>
    <NavLink to={path} activeClassName="active-nav"><i className="material-icons">{icon}</i></NavLink>
    <NavLink to={path} activeClassName="active-nav"><span>{text}</span></NavLink>
  </StyledNavItem>
);

const StyledNavItem = styled.div`
    a {
        color: ${black};
        text-decoration: none;
    }

    display: flex;
    align-items: center;
    background: #F9FDFD;

    i {
        margin-right: ${smallSpace};
        vertical-align: middle;
    }

    .active-nav {
        color: ${blue}
    }

    margin-bottom: ${mediumSpace2};
`;

export default SideNavItem;
