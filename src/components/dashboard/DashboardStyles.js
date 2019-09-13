import styled from 'styled-components';


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
    justify-content: space-between;
    padding: 1rem 3rem;
  }
`;
export const ShareLink = styled.img`
  cursor: pointer;

  &:hover {
    transform: scale(1.5);
    transition: 0.2s;
  }
`;

export const InputText = styled.input`
  border: 2px solid white;
  -webkit-box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.1),
    0 0 16px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.1),
    0 0 16px rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.1),
    0 0 16px rgba(0, 0, 0, 0.1);
  padding: 10px;
  width: 100%;
  width: 400px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.5);
  margin: 0 0 2px 0;
  border-radius: 3px;

  &:focus {
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    padding: 8px 0px 8px 8px;
    margin: 3px 1px 3px 0px;
    border: 1px solid rgba(81, 203, 238, 1);
    font-size: 1.5em;
    border-radius: 3px;
  }

  @media (max-width: 560px) {
    width: 300px;
  }

  @media (max-width: 380px) {
    width: 240px;
  }

  @media (max-width: 300px) {
    width: 180px;
  }
`;

export const Button = styled.button`
  width: 8.7em;
  height: 2.8em;
  color: #fff;
  background: #14799e;
  padding: 1px;
  border: 2px solid #494949 !important;
  border-radius: 3px;
  -webkit-font-smoothing: inherit;
  cursor: pointer;

  &:hover {
    background-color: #ffc247;
  }
`;

export const SurveyButtonWrapper = styled.div`
  padding: 0.5rem;
`;

export const SurveyButton = styled.button`
  width: 6.7em;
  height: 2.5em;
  color: #fff;
  background: #14799e;
  padding: 1px;
  border: 2px solid #494949 !important;
  border-radius: 3px;
  -webkit-font-smoothing: inherit;
  cursor: pointer;

  &:hover {
    background-color: #ffc247;
  }
`;

export const IndividualSurvey = styled.div`
         border: 1px solid lightgray;
         overflow: hidden;
         text-overflow: ellipsis;
         padding: 1rem;
         margin-bottom: 2.5rem;
         background-color: #cfedfe;
         -webkit-border-radius: 4px 3px 6px 10px;
         -moz-border-radius: 4px 3px 6px 10px;
         -o-border-radius: 4px 3px 6px 10px;
         border-radius: 4px 3px 6px 10px;
         text-overflow: ellipsis;
         box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
           0 6px 6px rgba(0, 0, 0, 0.23);

         .Owner {
           padding: 1rem;
         }

         .TitleAndShare {
           display: flex;
           justify-content: space-between;
           padding: 1rem;
         }

         @media (max-width: 300px) {
           width: 130%;
           padding: 1rem;
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
