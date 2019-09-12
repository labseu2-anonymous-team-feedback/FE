import React, { useState } from 'react';
import jwt from 'jsonwebtoken';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import link from '../../assets/images/link.svg';
import {
  IndividualSurvey,
  SurveyButton,
  ShareLink,
  SurveyButtonWrapper,
} from '../dashboard/DashboardStyles';

export function Survey(props) {
  const [copied, setCopied] = useState(false);

  if (copied) {
    toast('link has been copied to clipboard', {
      className: 'toast-success',
    });
    setCopied(false);
  }

  return (
    <div>
      {props.data.length > 0 ? (
        props.data.map(survey => {
          const token = jwt.sign({ surveyId: survey.id }, 'secret', {
            expiresIn: 60 * 60,
          });
          const url = `http://localhost:3000/survey/${token}`;
          return (
            <IndividualSurvey key={survey.title}>
              <div className="TitleAndShare">
                <h2>{survey.title}</h2>
                <CopyToClipboard
                  text={url}
                  onCopy={() => setCopied(true)}
                >
                  <ShareLink src={link} />
                </CopyToClipboard>
              </div>
              <div className="Owner">
                <p>{survey.owner.username}</p>
                <p>{survey.id}</p>
              </div>
              <SurveyButtonWrapper>
                <SurveyButton>View More</SurveyButton>
              </SurveyButtonWrapper>
            </IndividualSurvey>
          );
        })
      ) : (
        <h1>There are no surveys for this user</h1>
      )}
    </div>
  );
}

export default Survey;
