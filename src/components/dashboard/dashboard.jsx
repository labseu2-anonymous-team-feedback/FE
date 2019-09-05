import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import qql from 'graphql-tag';
import { GET_SURVEYS } from '../../graphql/queries';

export function Dashboard() {
  const { data, loading, error } = useQuery(GET_SURVEYS);
  if (data.getUserSurveys) {
    return (
      <div>
        {data.getUserSurveys.map((survey) => (
          <p key={survey.title}>{survey.title}</p>
        ))}
      </div>
    );
  }
  return <div>Loading</div>
}

export default Dashboard;
