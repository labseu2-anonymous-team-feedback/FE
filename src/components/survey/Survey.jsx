import React from 'react';
import {
  IndividualSurvey,
  SurveyButton,
} from '../dashboard/DashboardStyles';

export function Survey(props) {
  return (
    <div>
      {props.data.map(survey => (
        <IndividualSurvey key={survey.title}>
          <h2>Survey</h2>
          <br />
          <p>{survey.title}</p>
          <br />
          <p>{survey.owner.username}</p>
          <br />
          <SurveyButton>View More</SurveyButton>
        </IndividualSurvey>
      ))}
    </div>
  );
}

export default Survey;
