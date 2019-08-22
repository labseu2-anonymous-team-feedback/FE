import React from 'react';

const Question = () => (
  <div>
    <div className="form-group">
      <label htmlFor="text">Question</label>
      <textarea className="form-control rounded-0" id="text" rows="3" />
    </div>
    <div className="form-group">
      <label htmlFor="type">Question type</label>
      <select className="browser-default custom-select mb-4" id="type">
        <option value="" disabled>
          Choose option
        </option>
        <option value="text">Text</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  </div>
);

export default Question;
