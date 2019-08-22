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
      data: {
        title: '',
        questions: [],
      },
    };
  }

  render() {
    const { data } = this.state;
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
                value={data.title}
                onChange={this.change}
              />
            </div>

            <div>
              <h2>Survey Questions</h2>
              <Divider size={30} />

              <Question />
              <Question />
              <Question />
              <Question />
              <Question />
              <Question />
              <Question />

              <div className="text-center">
                <AddButton type="button" className="btn btn-light">
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
