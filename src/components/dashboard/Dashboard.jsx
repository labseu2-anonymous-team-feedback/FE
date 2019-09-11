import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import avatar from '../../assets/images/avatar-default.png';
import arrow from '../../assets/images/arrow.svg';
import settings from '../../assets/images/settings.svg';

import { GET_SURVEYS } from '../../graphql/queries';
import {
  DashboardContainer,
  UserWrapper,
  UserContainer,
  UserStatus,
  UserStatus2,
  UserIcon,
  UserImg,
  Button,
  InputText,
  SurveyInputWrapper,
  InputAndButtonWrapper,
  SurveyWrapper,
  InputButtonWrapper,
  DashboardWrapper,
  UserArrow,
  UserSettings,
} from './DashboardStyles';

import { Survey } from '../survey/Survey';

export function Dashboard() {
  const { data, loading } = useQuery(GET_SURVEYS);

  if (data.getUserSurveys) {
    return (
      <DashboardContainer>
        <DashboardWrapper>
          <UserWrapper>
            <UserContainer>
              <UserIcon>
                <UserImg src={avatar} alt="" />
              </UserIcon>
              <p className="avatar-name">Petar</p>
              <UserStatus>
                <div className="user-status-inner">
                  <p>9 surveys</p>
                </div>
                <div className="user-status-inner">
                  {' '}
                  <p> 4 responses</p>
                </div>
              </UserStatus>
              <UserStatus2>
                <div className="user-status-inner2">
                  <p>My Surveys</p>
                  <UserArrow src={arrow} />
                </div>
                <div className="user-status-inner2">
                  <p>Profile Settings</p>
                  <UserSettings src={settings} />
                </div>
              </UserStatus2>
            </UserContainer>
          </UserWrapper>

          <SurveyWrapper>
            <SurveyInputWrapper>
              <InputButtonWrapper>
                <InputAndButtonWrapper>
                  <div>
                    <InputText type="text" placeholder="" />
                  </div>
                  <div className="button-survey">
                    <Button>Add Survey</Button>
                  </div>
                </InputAndButtonWrapper>
              </InputButtonWrapper>
              <Survey data={data.getUserSurveys} />
            </SurveyInputWrapper>
          </SurveyWrapper>
        </DashboardWrapper>
      </DashboardContainer>
    );
  }
  return <div>{loading}</div>;
}

export default Dashboard;
