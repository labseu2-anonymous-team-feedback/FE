import React from 'react';
import { Query } from 'react-apollo';
import { GET_SURVEY_DETAILS } from '../../graphql/queries';
import { Container, Title } from './styles';
import TextResponse from './TextResponse';
import RatingResponse from './RatingResposne/RatingResponse';

export default class Feedback extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      surveyId: '',
      answers: [],
    };
  }

  componentDidMount() {
    const {
      match: {
        params: { surveyId },
      },
    } = this.props;
    if (surveyId) {
      this.setState({ surveyId });
    }
  }

  changeHandler = (e, questionId) => {
    e.preventDefault(); // this is not needed
    console.log(questionId);
  };

  ratingHandler = (value, questionId) => {
    alert(questionId);
  };

  initializeAnswers = (questions) => {
    const { surveyId } = this.state;
    const answers = questions.map((q) => {
      if (q.type === 'rating') {
        return { questionId: q.id, surveyId, rating: '' };
      }
      return { questionId: q.id, surveyId, comment: '' };
    });
    this.setState({ answers });
  };

  render() {
    const { surveyId } = this.state;
    return (
      <Container>
        <Query
          query={GET_SURVEY_DETAILS}
          variables={{ surveyId }}
          onCompleted={({ getSurveyDetails: { questions } }) => this.initializeAnswers(questions)}
        >
          {({ data, loading, error }) => {
            if (loading) return <p>Loading....</p>;
            if (error) return <div>{error.toString()}</div>;
            const {
              getSurveyDetails: { title, questions },
            } = data;
            return (
              <>
                <Title>{title}</Title>
                { questions.map((q, i) => {
                  if (q.type === 'rating') {
                    return (
                      <div className="form-group" key={q.id}>
                        <RatingResponse
                          question={q}
                          handleRating={this.ratingHandler}
                          index={i}
                        />
                      </div>
                    );
                  }
                  return (
                    <div className="form-group" key={q.id}>
                      <TextResponse
                        question={q}
                        changeHandler={this.changeHandler}
                        index={i}
                      />
                    </div>
                  );
                })}
                <div className="form-group">
                  <button className="btn btn-info btn-block mt-4" type="submit">
                    Submit
                  </button>
                </div>
              </>
            );
          }}
        </Query>
      </Container>
    );
  }
}
