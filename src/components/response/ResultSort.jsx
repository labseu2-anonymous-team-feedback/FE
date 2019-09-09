import React, { Component } from 'react';
import Chart from './Chart';


class ResultSort extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { answers } = this.props;
    const { question } = this.props;
    const processedData = (arr1, arr2) => {
      const sortData = [];
      arr1.map((ques) => arr2.map((ans) => {
        if (ques.id === ans.questionId) {
          sortData.push({
            ...ques,
            surveyId: ans.surveyId,
            questionId: ques.id,
            answerId: ans.id,
            comment: ans.comment,
            rating: ans.rating,
          });
        }
      }));
      return sortData;
    };

    const sortedAnswers = processedData(question, answers);
    return (
    //   sortedAnswers.map((ans) => (
    //     <div key={ans.answerId}>
    //       {ans.comment}
    //       {ans.rating}
    //       {ans.type}
    //     </div>
    //   ))
      <div>
        <Chart data={sortedAnswers} />
      </div>
    );
  }
}

export default ResultSort;
