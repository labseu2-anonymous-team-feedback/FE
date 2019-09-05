import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_SURVEYS } from '../../graphql/queries';
import {} from '../survey/SurveyStyles';
import { Survey } from '../survey/Survey';

export function Dashboard() {
  const { data, loading, error } = useQuery(GET_SURVEYS);
  if (data.getUserSurveys) {
    return (
      <div>
        <Survey data={data.getUserSurveys} />

      </div>
    );
  }
  return <div>{loading}</div>;
}

export default Dashboard;
