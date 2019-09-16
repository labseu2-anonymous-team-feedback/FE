import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import propTypes from 'prop-types';
import Divider from '../../styles/Divider';
import Spinner from '../common/Spinner';
import { GET_SURVEY_FEEDBACK } from '../../graphql/queries';
import ResultSort from './ResultSort';
import DashboardLayout from '../common/layouts/DashboardLayout';


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
    this.setState({ loading: true });
    const { data, loading } = await client.query({
      query: GET_SURVEY_FEEDBACK, variables: { surveyId },
    });
    if (!loading && data) {
      const survey = data.getSurveyFeedback;
      this.setState({ survey, loading });
    }
  }

  render() {
    const { survey, loading } = this.state;
    return (
      <DashboardLayout>
        {loading && <Spinner />}
        <h1 className="text-center create-survey-title f-1">
          {survey && survey.title}
        </h1>
        <Divider size={30} />
        {survey && survey.questions && <ResultSort questions={survey.questions} />}
      </DashboardLayout>
    );
  }
}


Response.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      surveyId: propTypes.string,
    }),
  }).isRequired,
  client: propTypes.shape({
    mutate: propTypes.func.isRequired,
    query: propTypes.func.isRequired,
  }).isRequired,
};

export default withApollo(Response);
