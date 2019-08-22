import React, { Component } from 'react';

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
      <form className="border border-light p-5" action="#!">
        <p className="text-center h4 mb-4">Create a Survey</p>

        <div className="form-group">
          <label htmlFor="title">
            Survey Title
            <input
              type="text"
              id="title"
              className="form-control mb-4"
              value={data.title}
              onChange={this.change}
            />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="type">
            Question type
            <select className="browser-default custom-select mb-4" id="type">
              <option value="" disabled>
                Choose option
              </option>
              <option value="text">Text</option>
              <option value="rating">Rating</option>
            </select>
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="text">
            Question
            <textarea className="form-control rounded-0" id="text" rows="3" />
          </label>
        </div>

        <button className="btn btn-info btn-block" type="submit">
          Save Survey
        </button>
      </form>
    );
  }
}

export default CreateSurvey;
