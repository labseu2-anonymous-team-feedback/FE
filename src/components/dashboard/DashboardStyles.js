import styled from 'styled-components';

export const DashboardContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  background: #f3f7f9;
  padding-top: 5rem;
`;

export const UserWrapper = styled.div`
  width: 30%;
  padding: 1rem;
  margin-top: 3.5rem;

  @media (max-width: 1150px) {
    width: 50%;
  }

  @media (max-width: 980px) {
    width: 50%;
  }

  @media (max-width: 780px) {
    display: flex;
    width: 95%;
    padding: 1rem;
  }

  @media (max-width: 400px) {
    display: flex;
    width: 98%;
    padding: 1rem;
  }

  @media (max-width: 300px) {
    width: 100%;
  }
`;

export const DashboardWrapper = styled.div`
  width: 80%;
  display: flex;
  margin: 0 auto;

  @media (max-width: 1200px) {
    display: flex;
    width: 80%;
  }

  @media (max-width: 1150px) {
    display: flex;
    flex-direction: column;
  }
`;

export const SurveyWrapper = styled.div`
  padding: 1rem;
  padding-top: 4rem;
  display: flex;
  width: 50%;
  justify-content: flex-start;

  @media (max-width: 1200px) {
    display: flex;
    width: 80%;
  }
`;

export const SurveyInputWrapper = styled.div`
  width: 100%;
`;

export const UserContainer = styled.div`
         display: flex;
         width: 80%;
         flex-direction: column;
         background: #ffff;
         padding: 1rem;
         border-radius: 3px;
         text-overflow: ellipsis;
         border: 1px solid lightgray;

         .avatar-name {
           text-align: center;
           padding-bottom: 1.3rem;
         }

         @media (max-width: 1400px) {
           display: flex;
           width: 88%;
           padding: 1rem;
         }

         @media (max-width: 780px) {
           display: flex;
           width: 60%;
           padding: 1rem;
         }

         @media (max-width: 520px) {
           display: flex;
           width: 80%;
           padding: 1rem;
           margin-top: 1.5rem;
         }

         @media (max-width: 400px) {
           display: flex;
           width: 99%;
           padding: 1rem;
         }

         @media (max-width: 300px) {
           width: 120%;
           padding: 1rem;
         }
       `;

export const UserIcon = styled.div`
  display: flex;
  padding-top: 1rem;
  padding-bottom: 1rem;
  justify-content: center;
  background: #ffff;
`;

export const UserStatus = styled.div`
  display: flex;
  padding: 0.5rem;
  margin-left: 0.2rem;
  justify-content: space-around;
  border: 1px solid lightgray;
  width: 96%;
  border-radius: 3px;

  .user-status-inner {
    display: flex;
    width: 200px;
    padding: 0.2rem;
    flex-wrap: wrap;
    text-overflow: ellipsis;
  }
`;

export const UserStatus2 = styled.div`
  padding: 0.5rem;
  border-radius: 3px;

  .user-status-inner2 {
    background-color: #cfedfe;
    padding: 0.5rem;
    border: 1px solid grey;
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-overflow: ellipsis;

    @media (max-width: 400px) {
      width: 110%;
    }
  }

  @media (max-width: 400px) {
    padding: 1.5rem;
  }
`;

export const UserImg = styled.img`
  width: 40%;
  display: flex;
  justify-content: center;
`;

export const UserArrow = styled.img`
  width: 20%;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 400px) {
    width: 30%;
  }
`;

export const UserSettings = styled.img`
  width: 20%;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 400px) {
    width: 30%;
  }
`;

export const ShareLink = styled.img`
  cursor: pointer;

  &:hover {
    transform: scale(1.4);
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
  padding: 5px;
  width: 100%;
  width: 400px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.5);
  margin: 0 0 9px 0;

  &:focus {
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    padding: 3px 0px 3px 3px;
    margin: 5px 1px 3px 0px;
    border: 1px solid rgba(81, 203, 238, 1);
  }

  @media (max-width: 500px) {
    width: 270px;
  }

  @media (max-width: 350px) {
    width: 240px;
  }

  @media (max-width: 300px) {
    width: 180px;
  }
`;

export const Button = styled.button`
  width: 8em;
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

export const SurveyButton = styled.button`
  width: 7em;
  height: 2em;
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
