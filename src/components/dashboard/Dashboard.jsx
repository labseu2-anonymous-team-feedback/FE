import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_SURVEYS } from '../../graphql/queries';
import {
  Button,
  InputText,
  SurveyInputWrapper,
  InputAndButtonWrapper,
  SurveyWrapper,
  InputButtonWrapper,
} from './DashboardStyles';

import { Survey } from '../survey/Survey';
import DashboardLayout from '../common/DashboardLayout';

export function Dashboard() {
  const { data, loading } = useQuery(GET_SURVEYS);

  if (data && data.getUserSurveys) {
    return (
      <DashboardLayout>
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
      </DashboardLayout>
    );
  }
  return <div>{loading}</div>;
}

export default Dashboard;
