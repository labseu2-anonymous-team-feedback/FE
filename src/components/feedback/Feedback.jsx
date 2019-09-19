import React from 'react';
import { withApollo } from 'react-apollo';
import propTypes from 'prop-types';
import { toast } from 'react-toastify';
import { GET_SURVEY_DETAILS } from '../../graphql/queries';
import { SAVE_FEEDBACK } from '../../graphql/mutations';
import { Container, Title, LoadIngIcon } from './styles';
import TextResponse from './TextResponse';
import RatingResponse from './RatingResponse/RatingResponse';
import Spinner from '../common/Spinner';
import { getUserIdFromToken } from '../../utils';

export class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      survey: null,
      answers: [],
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    const {
      match: {
        params: { surveyId },
      },
    } = this.props;
    if (surveyId) {
      this.fetchSurvey(surveyId);
    }
  }

  changeHandler = (event, questionId) => {
    const {
      target: { value },
    } = event;
    this.updateState(value, questionId);
  };

  ratingHandler = (value, questionId) => {
    this.updateState(value, questionId, true);
  };

  updateState = (value, questionId, rating = false) => {
    const { answers } = this.state;
    const answer = answers.find((ans) => ans.questionId === questionId);
    const updatedAnswer = {
      ...answer,
      ...(rating ? { rating: value.toString() } : { comment: value }),
    };
    const updatedAnswers = answers.map((currentAns) => {
      if (currentAns.questionId === questionId) {
        return updatedAnswer;
      }
      return currentAns;
    });
    this.setState({ answers: updatedAnswers });
  };

  initializeAnswers = (questions) => {
    if (questions) {
      const answers = questions.map((q) => {
        if (q.type === 'rating') {
          return { questionId: q.id, rating: '' };
        }
        return { questionId: q.id, comment: '' };
      });
      this.setState({ answers });
    }
  };

  validateInput = () => {
    let isValid = 0;
    const { answers } = this.state;
    answers.forEach((ans) => {
      if ({}.hasOwnProperty.call(ans, 'rating') && ans.rating) {
        isValid += 1;
      } else if ({}.hasOwnProperty.call(ans, 'comment') && ans.comment) {
        isValid += 1;
      }
    });
    return !!isValid;
  };

  fetchSurvey = async (surveyId) => {
    const { client } = this.props;
    this.setState({ isLoading: true });
    try {
      const { loading, data } = await client.query({
        query: GET_SURVEY_DETAILS,
        variables: { surveyId },
      });
      if (!loading && data) {
        const survey = data.getSurveyDetails;
        this.setState({ survey, isLoading: false });
        this.initializeAnswers(survey.questions);
      }
    } catch (error) {
      console.log(error);
      this.setState({ error: error.message });
    }
  };

  submitHandler = async (e) => {
    e.preventDefault();
    const userId = getUserIdFromToken();
    const { client, history } = this.props;
    const {
      answers,
      survey: { id },
    } = this.state;
    const responses = answers.filter((ans) => ans.rating || ans.comment);
    const feedbackData = {
      surveyId: id,
      ...(userId && { userId }),
      responses,
    };
    const isValid = this.validateInput();
    if (isValid) {
      try {
        this.setState({ isLoading: true });
        const { data } = await client.mutate({
          mutation: SAVE_FEEDBACK,
          variables: { input: feedbackData },
        });
        if (data) {
          toast.success('Feedback sent, Thank you 😍');
          this.setState({ isLoading: false, answers: [] });
          history.push('/success');
        }
      } catch (error) {
        toast.error('An error occurred trying to save your response 😔');
        this.setState({ isLoading: false });
      }
    } else {
      toast.error('Kindly respond to the questions before submitting 🙏🏻');
    }
  };

  render() {
    const { survey, isLoading, error } = this.state;
    return (
      <Container>
        {isLoading && <Spinner />}
        {error && (
          <p>
            Oops! Something went wrong
            <span role="img" aria-label="sad emoji">
              😔
            </span>
          </p>
        )}
        {survey && (
          <>
            <Title>{survey.title}</Title>
            {survey.questions.map((q, i) => {
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
              <button
                className="btn btn-info btn-block mt-4"
                type="submit"
                onClick={this.submitHandler}
              >
                {isLoading ? 'Processing... ' : 'Submit'}
                {isLoading && <LoadIngIcon />}
              </button>
            </div>
          </>
        )}
      </Container>
    );
  }
}

Feedback.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      surveyId: propTypes.string,
    }),
  }).isRequired,
  client: propTypes.shape({
    mutate: propTypes.func.isRequired,
    query: propTypes.func.isRequired,
  }).isRequired,
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
};

export default withApollo(Feedback);
