import styled from 'styled-components';

export const DashboardContainer = styled.section`
  margin: 0 auto;
  display: flex;
  background: #ececec;
  box-sizing: border-box;
  padding-top: 5rem;
`;

export const UserWrapper = styled.div`
  width: 80%;
  padding: 1rem;
  margin-top: 2.5rem;
`;

export const DashboardWrapper = styled.div`
  width: 80%;
  display: flex;
  margin: 0 auto;
`;

export const SurveyWrapper = styled.div`
  padding: 1rem;
  padding-top: 4rem;
  display: flex;
  width: 90%;
  justify-content: flex-start;
`;

export const SurveyInputWrapper = styled.div`
  width: 100%;
`;

export const UserContainer = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  background: #ffff;
  padding: 1rem;
  border-radius: 3px;

  .avatar-name {
    text-align: center;
    padding-bottom: 1.3rem;
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
  background: #ffff;
`;

export const UserStatus2 = styled.div`
  padding: 0.5rem;

  .user-status-inner2 {
    background-color: #b8d5fa;
    padding: 0.5rem;
    border: 1px solid grey;
  }
`;

export const UserImg = styled.img`
  width: 40%;
  display: flex;
  justify-content: center;
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
  width: 400px;
  background: rgba(255, 255, 255, 0.5);
  margin: 0 0 9px 0;
`;

export const Button = styled.button`
  width: 8em;
  height: 2.5em;
  color: #fff;
  background: #3ba7c9;
  padding: 1px;
  border: 2px solid #494949 !important;
  border-radius: 3px;

  &:hover {
    background-color: lightgrey;
  }
`;

export const IndividualSurvey = styled.div`
  border: 1px solid black;
  border-radius: 3px;
  max-width: 100%;
  padding: 1rem;
  margin-bottom: 1.5rem;
  background-color: #94c1f7;
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
`;

export const InputButtonWrapper = styled.div`
  width:100%;
  display:flex;
  margin-bottom: 2rem;
  margin-top: 1rem'
`;
