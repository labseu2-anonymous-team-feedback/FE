import React, { Component } from 'react';
import styled from 'styled-components';
import Divider from '../../styles/Divider';

const Question = styled.div`
  /* border: 1px solid green; */
`;

const Questions = styled.div`
  /* border: 1px solid blue; */
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
      <div className="container">
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

            <Questions>
              <h2>Survey Questions</h2>
              <Divider size={30} />
              <Question>
                <div className="form-group">
                  <label htmlFor="text">Question</label>
                  <textarea
                    className="form-control rounded-0"
                    id="text"
                    rows="3"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="type">Question type</label>
                  <select
                    className="browser-default custom-select mb-4"
                    id="type"
                  >
                    <option value="" disabled>
                      Choose option
                    </option>
                    <option value="text">Text</option>
                    <option value="rating">Rating</option>
                  </select>
                </div>
              </Question>
            </Questions>

            <Divider size={30} />

            <div className="form-group">
              <button className="btn btn-info btn-block" type="submit">
                Save Survey
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateSurvey;
