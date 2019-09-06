import React from 'react';
import { Container, Title } from './styles';
import TextResponse from './TextResponse';
import RatingResponse from './RatingResposne/RatingResponse';

export default function Feedback() {
  const changeHandler = (e) => {
    e.preventDefault(); // this is not needed
  };
  return (
    <Container>
      <Title>My build week performance survey</Title>
      <div className="form-group">
        <TextResponse
          question="2. Any suggestions on how I can improve on my performance?"
          changeHandler={changeHandler}
        />
      </div>
      <div className="form-group">
        <TextResponse
          question="3. Any suggestions on how I can improve on my performance?"
          changeHandler={changeHandler}
        />
      </div>
      <div className="form-group">
        <TextResponse
          question="4. Any suggestions on how I can improve on my performance?"
          changeHandler={changeHandler}
        />
      </div>
      <div className="form-group">
        <RatingResponse question="5. On scale of 1 to 10, how would you rate my communication skill?" />
      </div>
      <div className="form-group">
        <button className="btn btn-info btn-block mt-4" type="submit">
          Submit
        </button>
      </div>
    </Container>
  );
}
