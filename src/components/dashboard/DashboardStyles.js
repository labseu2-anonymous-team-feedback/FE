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

    input#search {
      font-size: 1rem;
      width: 25rem;
      padding: .4em;
      padding-left: 1em;
      border-radius: 2rem;
      border: 1px solid transparent;
      outline: none;
      background: #bdc4c7;
      border: 1px solid #bdc4c7;
      font-style: italic;

      &:focus {
        background: #a7aeb1;
      }
    }
  }
`;


export const SurveyButton = styled.button`
  font-size: 1rem;
  padding: .3em 1em;
  color: white;
  border: 1px solid transparent;
  border-radius: 5px;
  outline: none;
  background: #3BA7C9;

  &:hover {
    background: #2b839e;
  }
`;


export const ShareLink = styled.img`
  cursor: pointer;

  &:hover {
    transform: scale(1.5);
    transition: 0.2s;
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
