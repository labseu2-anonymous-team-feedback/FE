import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_SURVEYS } from '../../graphql/queries';
import {
  Button,
  InputText,
  SurveyPageHeader,
} from './DashboardStyles';

import { Survey } from '../survey/Survey';
import DashboardLayout from '../common/layouts/DashboardLayout';
import Divider from '../../styles/Divider';

export function Dashboard() {
  const { data, loading } = useQuery(GET_SURVEYS);

  if (data && data.getUserSurveys) {
    return (
      <DashboardLayout>
        <SurveyPageHeader>
          <div className="title-div">
            <h2 className="f-1">My Surveys</h2>
            <Divider />
          </div>
          <div className="actions-div">
            <div>
              <input type="text" id="search" placeholder="Search..." />
            </div>
            <div className="button-survey">
              <Button>Add Survey</Button>
            </div>
          </div>
        </SurveyPageHeader>

        <div className="surveys-wrapper">
          <Survey data={data.getUserSurveys} />
        </div>
      </DashboardLayout>
    );
  }
  return <div>{loading}</div>;
}

export default Dashboard;
