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
              <span className="avatar-name">Petar</span>
              <UserStatus>
                <div className="user-status-inner">9 surveys</div>
                <div className="user-status-inner">4 responses</div>
              </UserStatus>
              <UserStatus2>
                <div className="user-status-inner2">
                  <span>My Surveys</span>
                  <UserArrow src={arrow} />
                </div>
                <div className="user-status-inner2">
                  <span>Profile Settings</span>
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
                    <InputText type="text" placeholder="text input" />
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
