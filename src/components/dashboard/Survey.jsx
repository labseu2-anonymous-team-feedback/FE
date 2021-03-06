/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import {
  StyledSurvey,
  SurveyButton,
  StyledSurveyContainer,
} from './DashboardStyles';

const Survey = props => {
  const [copied, setCopied] = useState(false);
  if (copied) {
    toast('link has been copied to clipboard', {
      className: 'toast-success',
    });
    setCopied(false);
  }


  const { data } = props;
  return (
    <StyledSurveyContainer>
      {data.length > 0 ? (
        data.map(survey => {
          const url = `${window.location.origin}/take_survey/${survey.id}`;
          return (
            <StyledSurvey key={survey.id}>
              <h2 className="survey-title">{survey.title}</h2>
              <div className="copy-btn-div">
                <CopyToClipboard text={url} onCopy={() => setCopied(true)}>
                  <div className="btn-link-wrapper">
                    <i className="fas fa-link"></i>
                    &nbsp;
                    <span>Get invite link</span>
                  </div>
                </CopyToClipboard>
              </div>
              <div className="survey-actions">
                <div className="questions">
                  <Link to={`/survey/${survey.id}`}>
                    {survey.questions ? survey.questions.length : '0'}{' '}
                    Question(s)
                  </Link>
                </div>
                <SurveyButton className="btn" to={`/survey/${survey.id}`}>
                  View Details
                </SurveyButton>
              </div>
            </StyledSurvey>
          );
        })
      ) : (
        <div className="no-survey-msg">
            <h4>There are no surveys for this user</h4>
        </div>
      )}
    </StyledSurveyContainer>
  );
};

Survey.propTypes = {
  data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};

export default Survey;
