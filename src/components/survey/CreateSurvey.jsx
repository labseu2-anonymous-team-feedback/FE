import React, { Component } from 'react';
import Divider from '../../styles/Divider';
import Question from './Question';
import { AddButton, Container } from './SurveyStyles';

class CreateSurvey extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      questions: [
        {
          text: '',
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
          <form className="border border-light p-5" action="#!">
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
                  text={question.text}
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
                        text: '',
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
        </div>
      </Container>
    );
  }
}

export default CreateSurvey;
