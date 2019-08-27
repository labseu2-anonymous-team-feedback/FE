import styled from 'styled-components';
import { mainColor } from '../../styles/variables';

export const NavigationNav = styled.nav`
    height: 100px;
    display: flex;
    padding: 0px !important;

    .logo-div {
        height: 100%;
        flex: 1;
        display: flex;
        align-items: center;
        padding-left: 1rem;

        img {
            height: 70%;
        }
    }

    .auth-links {
        height: 100%;
        flex: 1;
        display: flex;
        justify-content: flex-end;

        img {
            height: 40px;
        }

        #user-nav-div {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: transparent;
            border: none;
            cursor: pointer;
            height: 100%;
            width: 150px;

            &:focus {
                outline: none;
            }

            &:hover {
                background: #d3dfea5e;
            }

            .user-info {
                width: 150px;
                display: flex;
                justify-content: center;
                
                #triangle-nav {
                    margin: 10px 0px 0px 10px;
                }
            }
    }
}
`;


export const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 10px solid ${mainColor};
`;


export const NavItems = styled.div`
    border: 1px solid red;
    height: 100%;
`;
