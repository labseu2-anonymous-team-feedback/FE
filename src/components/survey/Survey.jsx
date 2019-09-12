import React from 'react';
import { IndividualSurvey, SurveyButton } from '../dashboard/DashboardStyles';

export function Survey(props) {
  return (
    <div>
      {props.data.length > 0 ? (
        props.data.map((survey) => (
          <IndividualSurvey key={survey.title}>
            <h2>Survey</h2>
            <br />
            <p>{survey.title}</p>
            <br />
            <p>{survey.owner.username}</p>
            <br />
            <SurveyButton>View More</SurveyButton>
          </IndividualSurvey>
        ))
      ) : (
        <h1>There are no surveys for this user</h1>
      )}
    </div>
  );
}

export default Survey;
