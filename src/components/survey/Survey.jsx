import React from 'react';
import link from '../../assets/images/link.svg';
import {
  IndividualSurvey,
  SurveyButton,
  ShareLink,
  SurveyButtonWrapper,
} from '../dashboard/DashboardStyles';

export function Survey(props) {
  return (
    <div>
      {props.data.length > 0 ? (
        props.data.map(survey => (
          <IndividualSurvey key={survey.title}>
            <div className="TitleAndShare">
              <h2>{survey.title}</h2>
              <ShareLink src={link} />
            </div>
            <div className="Owner">
              <p>{survey.owner.username}</p>
              <p>{survey.id}</p>
            </div>
            <SurveyButtonWrapper>
              <SurveyButton>View More</SurveyButton>
            </SurveyButtonWrapper>
          </IndividualSurvey>
        ))
      ) : (
        <h1>There are no surveys for this user</h1>
      )}
    </div>
  );
}

export default Survey;
