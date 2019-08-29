import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { toast } from 'react-toastify';
import Divider from '../../styles/Divider';
import Question from './Question';
import { AddButton, Container } from './SurveyStyles';

import { CREATE_NEW_SURVEY } from '../../graphql/mutations';

class CreateSurvey extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      questions: [
        {
          question: '',
          type: '',
        },
      ],
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
        <div className="col-md">
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
                      toast.error('Please provide all questions');
                      questionsAreValid = false;
                    }
                    if (!q.type) {
                      toast.error('Please specify a type for all questions');
                      questionsAreValid = false;
                    }
                    if (q.question && q.question.length < 5) {
                      toast.error('Each question must be at least 5 characters long');
                      questionsAreValid = false;
                    }
                  });

                  if (!title) {
                    toast.error('Survey title required');
                  } else if (questionsAreValid) {
                    createNewSurvey({
                      variables: { input: { title, questions } },
                    });
                    toast.success('Survey created successfully');
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
                <h1 className="text-center">Create a Survey</h1>
                <Divider size={30} />
                <div className="form-group">
                  <label htmlFor="title">Survey Title</label>
                  <input
                    type="text"
                    id="title"
                    className="form-control mb-4"
                    name="title"
                    value={title}
                    onChange={this.handleChangeSurvey}
                  />
                </div>

                <div>
                  <h2>Survey Questions</h2>
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
                  <button className="btn btn-info btn-block" type="submit">
                    Save Survey
                  </button>
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
