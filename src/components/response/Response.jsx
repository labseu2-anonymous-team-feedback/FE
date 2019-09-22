import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import Divider from '../../styles/Divider';
import { GET_SURVEY_FEEDBACK } from '../../graphql/queries';
import ResultSort from './ResultSort';
import DashboardLayout from '../dashboard/layouts/DashboardLayout';


class Response extends Component {
  constructor(props) {
    super(props);
    this.state = {
      surveyId: '',
      survey: null,
      loading: false,
    };
  }

  componentDidMount() {
    const {
      match: {
        params: { surveyId },
      },
    } = this.props;
    this.setState({ surveyId });

    this.getSurveyDetails(surveyId);
  }

  getSurveyDetails= async (surveyId) => {
    const {
      client,
    } = this.props;
    // console.log(client);
    this.setState({ loading: true });
    const { data, loading } = await client.query({
      query: GET_SURVEY_FEEDBACK, variables: { surveyId },
    });
    if (!loading && data) {
      const survey = data.getSurveyFeedback;
      this.setState({ survey, loading });
    }
    // console.log(data);
  }

  render() {
    const { survey } = this.state;
    return (
      <DashboardLayout>
        <h1 className="text-center create-survey-title f-1">
          {survey && survey.title}
        </h1>
        <Divider size={30} />
        {survey && survey.questions && <ResultSort questions={survey.questions} />}
      </DashboardLayout>
    );
  }
}


export default withApollo(Response);
