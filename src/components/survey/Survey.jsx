import React from 'react';

export function Survey(props) {
  return (
    <div>
      {props.data.map(survey => (
        <p key={survey.title}>{survey.title}</p>
      ))}
    </div>
  );
}

export default Survey;
