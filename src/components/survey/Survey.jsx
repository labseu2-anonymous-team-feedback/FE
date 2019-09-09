import React from 'react';
import {
  IndividualSurvey,
  SurveyButton,
} from '../dashboard/DashboardStyles';

export function Survey(props) {
  return (
    <div>
      {props.data.map( (survey) => (
        <IndividualSurvey key={survey.title}>
          <h3>Survey</h3>
          {survey.title}
          <br />
          {survey.owner.username}
          <br />
          <br />
          <SurveyButton>View More</SurveyButton>
        </IndividualSurvey>
      ))}
    </div>
  );
}

export default Survey;
