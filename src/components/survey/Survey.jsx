import React, { useState } from 'react';
import PropTypes from 'prop-types';
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

  const { data } = props;

  return (
    <div>
      {data.length > 0 ? (
        data.map((survey) => {
          const url = `http://localhost:3000/take_survey/${survey.id}`;
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

Survey.propTypes = {
  data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default Survey;
