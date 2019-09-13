/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import link from '../../assets/images/link.svg';
import {
	StyledSurvey,
	SurveyButton,
	ShareLink,
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
						<StyledSurvey key={survey.title}>
							<h2 className="survey-title">{survey.title}</h2>
							<div className="copy-btn-div">
								<CopyToClipboard text={url} onCopy={() => setCopied(true)}>
									<div className="btn-link-wrapper">
										<i class="fas fa-link"></i>
										&nbsp;
										<span>Get invite link</span>
									</div>
								</CopyToClipboard>
							</div>
							<SurveyButton>View More</SurveyButton>
						</StyledSurvey>
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
