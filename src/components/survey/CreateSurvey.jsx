import React, { Component } from 'react';
import styled from 'styled-components';
import Divider from '../../styles/Divider';
import Question from './Question';

const AddButton = styled.button`
  font-size: 1.5rem;
  border-radius: 50%;
  padding: 0px;
  width: 4rem;
  height: 4rem;
  text-align: center;
`;

const Container = styled.div`
  margin-top: 8rem;
`;

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

  handleChangeSurvey = (e) => {
    this.setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
