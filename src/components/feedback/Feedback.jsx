import React from 'react';
import { Query, withApollo } from 'react-apollo';
import propTypes from 'prop-types';
import { toast } from 'react-toastify';
import { GET_SURVEY_DETAILS } from '../../graphql/queries';
import { SAVE_FEEDBACK } from '../../graphql/mutations';
import { Container, Title, LoadIngIcon } from './styles';
import TextResponse from './TextResponse';
import RatingResponse from './RatingResposne/RatingResponse';

class Feedback extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      surveyId: '',
      answers: [],
      isLoading: false,
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

  initializeAnswers = (data) => {
    if (data) {
      const {
        getSurveyDetails: { questions },
      } = data;
      const { surveyId } = this.state;
      const answers = questions.map((q) => {
        if (q.type === 'rating') {
          return { questionId: q.id, surveyId, rating: '' };
        }
        return { questionId: q.id, surveyId, comment: '' };
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

  submitHandler = async (e) => {
    e.preventDefault();

    const { client } = this.props;
    const { answers } = this.state;
    const isValid = this.validateInput();
    if (isValid) {
      try {
        this.setState({ isLoading: true });
        const { data } = await client.mutate({
          mutation: SAVE_FEEDBACK,
          variables: { input: { responses: answers } },
        });
        if (data) {
          toast.success('Feedback sent, Thank you 😍');
          this.setState({ isLoading: false, answers: [] });
        }
      } catch (error) {
        toast.error('An error occurred trying to save your response');
        this.setState({ isLoading: false });
      }
    } else {
      toast.error('Kindly respond to the questions before submitting 🙏🏻');
    }
  };

  render() {
    const { surveyId, isLoading } = this.state;
    return (
      <Container>
        <Query
          query={GET_SURVEY_DETAILS}
          variables={{ surveyId }}
          onCompleted={(data) => this.initializeAnswers(data)}
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
                {questions.map((q, i) => {
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
                    { isLoading ? 'processing... ' : 'Submit' }
                    {isLoading && <LoadIngIcon />}
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

Feedback.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      surveyId: propTypes.string.isRequired,
    }),
  }).isRequired,
  client: propTypes.shape({
    mutate: propTypes.func.isRequired,
  }).isRequired,
};

export default withApollo(Feedback);
