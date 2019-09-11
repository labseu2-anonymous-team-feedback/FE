import React from 'react';
import {
  IndividualSurvey,
  SurveyButton,
} from '../dashboard/DashboardStyles';
import { SurveyDetails } from './SurveyDetails';

export function Survey(props) {
  return (
    <div>
      {props.data.length > 0 ? (
        props.data.map(survey => (
          <IndividualSurvey key={survey.title}>
            <p>{survey.title}</p>
            <br />
            <p>{survey.owner.username}</p>
            <br />
            <p>{survey.id}</p>
            <br />
            <SurveyButton>View More</SurveyButton>
            <SurveyDetails />
          </IndividualSurvey>
        ))
      ) : (
        <h1>There are no surveys for this user</h1>
      )}
    </div>
  );
}

export default Survey;
