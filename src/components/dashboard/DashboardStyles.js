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

export const StyledSurvey = styled.div`
  flex-grow: 1;
  width: 33rem;
  background-color: #f1faff;
  margin: 1rem;
  border-radius: 5px;
  position: relative;

  .survey-title {
    width: 75%;
    padding: 1rem;
  }

  .copy-btn-div {
    position: absolute;
    top: 0rem;
    right: 0rem;
    font-size: .8rem;
    margin: .325rem;
    padding: .325rem;
    color: #444;
    
    &:hover {
      cursor: pointer;
      color: #3BA7C9;
      border-bottom: 1px solid #3BA7C9;
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


export const SurveyContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 2rem;
  width: 100%;
`;

export const SurveyButton = styled.button`
  font-size: 1rem;
  padding: .3em 1em;
  color: white;
  border: 1px solid transparent;
  border-radius: 5px;
  outline: none;
  background: #3BA7C9;
  white-space: nowrap;

  &:hover {
    background: #2b839e;
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
