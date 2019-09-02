import styled from 'styled-components';
import { mainColor } from '../../styles/variables';

export const NavigationNav = styled.nav`
    height: 100px;
    display: flex;
    padding: 0px !important;
    box-shadow: 0 5px 50px -20px rgba(0,0,0,0.1);

    @media (max-width: 575px) {
        height: 70px;
    }

    .logo-div {
        height: 100%;
        flex: 1;
        display: flex;
        align-items: center;
        padding-left: 1rem;

        img {
            height: 70%;
            @media (max-width: 575px) {
                height: 50%;
            }
            @media (max-width: 375px) {
                height: 40%;
            }
        }
    }

    .auth-links {
        height: 100%;
        flex: 1;
        display: flex;
        justify-content: flex-end;

        img {
            height: 40px;

            @media (max-width: 575px) {
                height: 35px;
            }
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

            @media (max-width: 575px) {
                width: 100px;
            }

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
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    a {
        padding: 1rem;
        color: #212529;

        &:hover {
            color: #222;
        }
    }
    
`;
