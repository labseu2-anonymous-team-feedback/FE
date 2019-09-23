import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mainColor, mainColorHover } from '../../styles/variables';


export const DashboardDivider = styled.div`
    width: 96%;
    height: 1px;
    background: #e0e0e0;
    margin: 2rem auto 0rem;


  @media (max-width: 960px) {
    margin: 1rem auto 0rem;
  }
`;

export const SurveyPageHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .title-div {
    padding: 2rem 1rem 1rem 1rem;
    text-align: center;
  }

  .actions-div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 1rem;
  }
`;

export const StyledSurveyContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
  }

`;

export const StyledSurvey = styled.div`
         /* flex-grow: 1; */
         width: 44%;
         background-color: #ffff;
         margin: 1rem;
         border-radius: 5px;
         position: relative;

         @media (max-width: 960px) {
           width: 96%;
         }

         .survey-title {
           width: 75%;
           padding: 1rem;
           white-space: nowrap;
           overflow: hidden;
           text-overflow: ellipsis;
         }

         .copy-btn-div {
           position: absolute;
           top: 0rem;
           right: 0rem;
           font-size: 0.8rem;
           margin: 0.325rem;
           padding: 0.325rem;
           color: #444;

           &:hover {
             cursor: pointer;
             color: ${mainColorHover};
             border-bottom: 1px solid #3ba7c9;
           }

           i {
             font-size: 1rem;
           }

           .btn-link-wrapper {
             display: flex;
             align-items: center;
             justify-content: center;
           }
         }

         .survey-actions {
           display: flex;
           align-items: center;
           padding: 0.4rem 1rem 1rem;
           justify-content: space-between;

           .questions {
             font-size: 0.9rem;
             a {
               text-decoration: none;
               color: #444;
               &:hover {
                 color: ${mainColorHover};
                 cursor: pointer;
               }
             }
           }
         }
       `;


export const SurveyContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 2rem;
  width: 100%;
`;

export const SurveyButton = styled(Link)`
         font-size: 1rem;
         padding: 0.3em 1em;
         color: white;
         border: 1px solid transparent;
         border-radius: 5px;
         outline: none;
         background: ${mainColor};
         white-space: nowrap;


         &:hover {
           background: ${mainColorHover};
           color: white;
         }
       `;


export const MainInputAndButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
`;

export const InputAndButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 730px) {
    display: flex;
    flex-direction: column;
  }
`;

export const InputButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 2rem;
  margin-top: 1rem;

  @media (max-width: 500px) {
    padding-right: 2rem;
  }
`;
