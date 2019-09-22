import styled from 'styled-components';
import { mainColor } from '../../styles/variables';

export const NavigationNav = styled.nav`
    height: 100px;
    display: flex;
    padding: 0px !important;
    box-shadow: 0 5px 50px -20px rgba(0,0,0,0.1);


    .fa-bars {
        font-size: 2.5rem;
        position: absolute;
        right: 2rem;
        top: 2rem;
        color: #3BA7C9;
        display: none;
        cursor: pointer;
        
        @media (max-width: 770px) {
            display: block;
        }
    }

    .logo-div {
        height: 100%;
        flex: 1;
        display: flex;
        align-items: center;
        padding-left: 1rem;

        a {
            height: 65%;
            
            .logo {

                height: 50px;
                @media (max-width: 575px) {
                    height: 100%;
                }
                @media (max-width: 375px) {
                    height: 80%;
                }
            }
        }
    }

    .auth-links {
        height: 100%;
        flex: 1;
        display: flex;
        justify-content: flex-end;

        @media (max-width: 770px) {
            display: none;
        }

        img {
            height: 40px;
            width: 40px !important;

            @media (max-width: 575px) {
                height: 35px;
                width: 35px;
            }
        }

        #user-nav-div {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
            background-color: transparent;
            border: none;
            cursor: pointer;
            height: 100%;
            width: 150px;

            @media (max-width: 575px) {
                width: 120px;
            }

            &:focus {
                outline: none;
            }

            &:hover {
                background: #d3dfea5e;
            }

            .user-info {
                display: flex;
                align-items: center;
                justify-content: center;
                flex: 3;
                @media (max-width: 575px) {
                    height: 100%;
                    width: 100%;
                }

                img {
                    width: 40%;
                    @media (max-width: 575px) {
                        width: 30%;
                    }
                }
            }
            #triangle-nav {
                transform: translateX(10px);
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
