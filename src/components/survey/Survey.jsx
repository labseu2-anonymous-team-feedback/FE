import React, { useState } from 'react';
import jwt from 'jsonwebtoken';
import link from '../../assets/images/link.svg';
import {
  IndividualSurvey,
  SurveyButton,
  ShareLink,
  SurveyButtonWrapper,
} from '../dashboard/DashboardStyles';

export function Survey(props) {
  const generateLink = id => {
    const data = { surveyId: id };
    const token = jwt.sign(data, 'secret', { expiresIn: 60 * 60 });
    const url = `http://localhost:3000/survey/${token}`;
    console.log(token);
    console.log(url);
  };


  return (
    <div>
      {props.data.length > 0 ? (
        props.data.map(survey => (
          <IndividualSurvey key={survey.title}>
            <div className="TitleAndShare">
              <h2>{survey.title}</h2>
              <ShareLink
                onClick={() => generateLink(survey.id)}
                src={link}
              />
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
