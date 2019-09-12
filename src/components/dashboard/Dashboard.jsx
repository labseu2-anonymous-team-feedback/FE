import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import avatar from '../../assets/images/avatar-default.png';
import arrow from '../../assets/images/arrow.svg';
import settings from '../../assets/images/settings.svg';

import { GET_SURVEYS } from '../../graphql/queries';
import SidebarContainer from '../common/Sidebar';
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
          <SidebarContainer />
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
