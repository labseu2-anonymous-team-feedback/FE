import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { toast } from 'react-toastify';

import Divider from '../../styles/Divider';
import Question from './Question';
import { AddButton, Container, CancelButton } from './SurveyStyles';

import { CREATE_NEW_SURVEY } from '../../graphql/mutations';
import TextInput from '../common/TextInput';
import Button from '../../styles/Button';

class CreateSurvey extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      questions: [],
    };
  }

  handleChangeQuestion = (index, e) => {
    const { name, value } = e.target;

    this.setState((prev) => ({
      questions: prev.questions.map((q, i) => {
        if (index === i) {
          return {
            ...q,
            [name]: value,
          };
        }
        return q;
      }),
    }));
  };

  removeQuestion = (index) => {
    this.setState((prev) => ({
      questions: prev.questions.filter((current, i) => index !== i),
    }));
  };

  handleChangeSurvey = (e) => {
    this.setState({ title: e.target.value });
  };

  render() {
    const { title, questions } = this.state;
    return (
      <Container className="container">
        <div className="col-md survey-row">
          <Mutation mutation={CREATE_NEW_SURVEY}>
            {(createNewSurvey) => (
              <form
                className="p-5"
                action="#!"
                onSubmit={(e) => {
                  e.preventDefault();
                  let questionsAreValid = true;

                  questions.forEach((q) => {
                    if (!q.question) {
                      toast('Please provide all questions', {
                        className: 'toast-error',
                      });
                      questionsAreValid = false;
                    }
                    if (!q.type) {
                      toast('Please specify a type for all questions', {
                        className: 'toast-error',
                      });
                      questionsAreValid = false;
                    }
                    if (q.question && q.question.length < 5) {
                      toast(
                        'Each question must be at least 5 characters long',
                        { className: 'toast-error' },
                      );
                      questionsAreValid = false;
                    }
                  });

                  if (!title) {
                    toast('Survey title required', {
                      className: 'toast-error',
                    });
                  } else if (questionsAreValid) {
                    createNewSurvey({
                      variables: { input: { title, questions } },
                    });
                    toast('Survey created successfully', {
                      className: 'toast-success',
                    });
                    this.setState({
                      title: '',
                      questions: [
                        {
                          question: '',
                          type: '',
                        },
                      ],
                    });
                  }
                }}
              >
                <CancelButton to="/">Cancel</CancelButton>
                <h1 className="text-center create-survey-title f-1">
                  Create a Survey
                </h1>
                <Divider size={30} />
                <TextInput
                  title="Survey Title"
                  id="title"
                  value={title}
                  name={title}
                  onChange={this.handleChangeSurvey}
                />

                <div>
                  <h2 className="questions-title f-1">Survey Questions</h2>
                  <Divider size={30} />

                  {questions.map((question, index) => (
                    <Question
                      key={index.toString()}
                      question={question.question}
                      type={question.type}
                      index={index}
                      handleChangeQuestion={this.handleChangeQuestion}
                      removeQuestion={this.removeQuestion}
                    />
                  ))}

                  <div className="text-center">
                    <AddButton
                      type="button"
                      className="btn btn-light"
                      onClick={() => {
                        this.setState((prev) => ({
                          ...prev,
                          questions: prev.questions.concat({
                            question: '',
                            type: '',
                          }),
                        }));
                      }}
                    >
                      +
                    </AddButton>
                  </div>
                </div>

                <Divider size={30} />

                <div className="form-group">
                  <Button className="btn btn-block" type="submit">
                    Save Survey
                  </Button>
                </div>
              </form>
            )}
          </Mutation>
        </div>
      </Container>
    );
  }
}

export default CreateSurvey;
