import React from 'react';
import styled from 'styled-components';
import { isLoggedIn } from '../../utils';

const StyledFooter = styled.footer`
  background-color: #63beff;
`;

export default function Footer() {
  const isSignedIn = isLoggedIn();
  if (isSignedIn) {
    return (
      <StyledFooter className="page-footer font-small darken-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 py-5">
              <div className=" flex-center">
                <a className="fb-ic" href="##">
                  <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x">
                    {' '}
                  </i>
                </a>

                <a className="tw-ic" href="##">
                  <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x">
                    {' '}
                  </i>
                </a>

                <a className="gplus-ic" href="##">
                  <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x">
                    {' '}
                  </i>
                </a>

                <a className="li-ic" href="##">
                  <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x">
                    {' '}
                  </i>
                </a>

                <a className="ins-ic" href="##">
                  <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x">
                    {' '}
                  </i>
                </a>

                <a className="pin-ic" href="##">
                  <i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
                </a>
              </div>
            </div>
          </div>
        </div>
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
