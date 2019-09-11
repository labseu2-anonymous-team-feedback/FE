import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import { Container, MainContainer } from './ResponseStyles';
import SideBar from '../common/Sidebar';
import Divider from '../../styles/Divider';
import { GET_SURVEY_FEEDBACK } from '../../graphql/queries';
import ResultSort from './ResultSort';


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
    console.log(surveyId);
    this.setState({ surveyId });

    this.getSurveyDetails(surveyId);
    // Promise.all([
    //   fetch(`${process.env.PUBLIC_URL || ''}/survey.json`),
    //   fetch(`${process.env.PUBLIC_URL || ''}/feedback.json`),
    // ])
    //   .then((responses) => Promise.all(responses.map((resp) => resp.json())))
    //   .then(([survey, feedback]) => {
    //     const surveyFeedback = feedback.data.getSurveyFeedback;
    //     this.setState({ answers: surveyFeedback });
    //     const userSurvey = survey.data.getUserSurveys;
    //     this.setState({ selectedSurvey: userSurvey[0] });
    //   });
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
    // const { title, questions } = survey;
    return (
      <MainContainer>
        <SideBar />
        <Container className="container">
          <h1 className="text-center create-survey-title f-1">
            {survey && survey.title}
          </h1>
          <Divider size={30} />
          {survey && survey.questions && <ResultSort questions={survey.questions} />}
        </Container>
      </MainContainer>

    );
  }
}


export default withApollo(Response);
