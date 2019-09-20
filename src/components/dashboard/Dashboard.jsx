import React, { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { withRouter } from 'react-router-dom';

import { GET_SURVEYS } from '../../graphql/queries';
import {
  SurveyPageHeader,
  SurveyButton,
  SurveyContent,
  DashboardDivider,
} from './DashboardStyles';

import Survey from './Survey';
import DashboardLayout from './layouts/DashboardLayout';
import Divider from '../../styles/Divider';
import Spinner from '../common/Spinner';

export function Dashboard() {
  const { data } = useQuery(GET_SURVEYS);
  // const [surveys, setSurveys] = useState(data);
  // debugger;

  // useEffect(() => () => {
  //     console.log('unmounted');
  //   });

  if (data && data.getUserSurveys) {
    // debugger;
    return (
      <DashboardLayout>
        <SurveyPageHeader>
          <div className="title-div">
            <h2 className="f-1">My Surveys</h2>
            <Divider />
          </div>
          <div className="actions-div">
            {/* <input type="text" id="search" placeholder="Search..." /> */}
            <SurveyButton to="/create_survey">Add Survey</SurveyButton>
          </div>
        </SurveyPageHeader>
        <DashboardDivider />
        <SurveyContent>
          <Survey data={data.getUserSurveys} />
        </SurveyContent>
      </DashboardLayout>
    );
  }
  return <Spinner />;
}

export default withRouter(Dashboard);
