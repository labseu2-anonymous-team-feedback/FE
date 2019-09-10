import React from 'react';
import styled from 'styled-components';
import { isLoggedIn } from '../../utils';

const StyledFooter = styled.footer`
  background-color: #d9eaf7;
  color: #63beff;
`;

export default function Footer() {
  const isSignedIn = isLoggedIn();
  if (isSignedIn) {
    return (
      <StyledFooter className="font-small darken-3 fixed-bottom">
        <div className="footer-copyright text-center py-3">
          ©
          {' '}
          {new Date().getFullYear()}
          {' '}
Copyright:
          <a href="##"> Anonymous Team Feedback</a>
        </div>
      </StyledFooter>
    );
  }
  return '';
}