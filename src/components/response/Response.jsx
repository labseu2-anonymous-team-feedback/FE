import React, { Component } from 'react';
import { Container, MainContainer } from './ResponseStyles';
import SideBar from '../common/Sidebar';
import Divider from '../../styles/Divider';
import ResultSort from './ResultSort';


class Response extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSurvey: {},
      answers: {},
    };
  }

  componentDidMount() {
    Promise.all([
      fetch(`${process.env.PUBLIC_URL || ''}/survey.json`),
      fetch(`${process.env.PUBLIC_URL || ''}/feedback.json`),
    ])
      .then((responses) => Promise.all(responses.map((resp) => resp.json())))
      .then(([survey, feedback]) => {
        const surveyFeedback = feedback.data.getSurveyFeedback;
        this.setState({ answers: surveyFeedback });
        const userSurvey = survey.data.getUserSurveys;
        this.setState({ selectedSurvey: userSurvey[0] });
      });
  }

  render() {
    const { answers } = this.state;
    const { selectedSurvey } = this.state;
    const { title, questions } = selectedSurvey;
    return (
      <MainContainer>
        <SideBar />
        <Container className="container">
          <h1 className="text-center create-survey-title f-1">
            {title}
          </h1>
          <Divider size={30} />
          {questions && answers !== {} && <ResultSort question={questions} answers={answers} />}
        </Container>
      </MainContainer>

    );
  }
}


export default Response;
