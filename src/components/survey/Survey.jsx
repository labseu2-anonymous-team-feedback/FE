import React from 'react';
import {
  IndividualSurvey,
  Button,
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
          <Button>View More</Button>
        </IndividualSurvey>
      ))}
    </div>
  );
}

export default Survey;
