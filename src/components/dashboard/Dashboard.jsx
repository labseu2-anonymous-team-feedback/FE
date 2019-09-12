import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_SURVEYS } from '../../graphql/queries';
import SidebarContainer from '../common/Sidebar';
import {
  DashboardContainer,
  Button,
  InputText,
  SurveyInputWrapper,
  InputAndButtonWrapper,
  SurveyWrapper,
  InputButtonWrapper,
  DashboardWrapper,
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
