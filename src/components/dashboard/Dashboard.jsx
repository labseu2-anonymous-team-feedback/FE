import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_SURVEYS } from '../../graphql/queries';
import {
	Button,
	InputText,
	SurveyInputWrapper,
	InputAndButtonWrapper,
	SurveyWrapper,
	InputButtonWrapper,
	SurveyPageHeader,
} from './DashboardStyles';

import { Survey } from '../survey/Survey';
import DashboardLayout from '../common/layouts/DashboardLayout';
import Divider from '../../styles/Divider';

export function Dashboard() {
	const { data, loading } = useQuery(GET_SURVEYS);

	if (data && data.getUserSurveys) {
		return (
			<DashboardLayout>
				<SurveyPageHeader>
					<div className="title-div">
						<h2 className="f-1">My Surveys</h2>
						<Divider />
					</div>
					<div className="actions-div">
						<div>
							<InputText type="text" placeholder="" />
						</div>
						<div className="button-survey">
							<Button>Add Survey</Button>
						</div>
					</div>
				</SurveyPageHeader>

				<div className="surveys-wrapper">
					<Survey data={data.getUserSurveys} />
				</div>
			</DashboardLayout>
		);
	}
	return <div>{loading}</div>;
}

export default Dashboard;
