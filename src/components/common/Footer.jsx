import React from 'react';
import styled from 'styled-components';
import { isLoggedIn } from '../../utils';

const StyledFooter = styled.footer`
  background-color: #f7f7f7;
  position: fixed;
  bottom: 0;
  height: 56px;
  width: 100%;
  > * {
    color: #444;
  }
  a {
    color: #444;
    text-decoration: underline;
  }
`;

export default function Footer() {
  const isSignedIn = isLoggedIn();
  if (isSignedIn) {
    return (
      <StyledFooter className="font-small darken-3">
        <div className="footer-copyright text-center py-3">
          ©
          {' '}
          {new Date().getFullYear()}
          {' '}
Copyright:
          <a href="https://anonymous-team-feeedback.herokuapp.com"> Anonymous Team Feedback</a>
        </div>
      </StyledFooter>
    );
  }
  return '';
}
