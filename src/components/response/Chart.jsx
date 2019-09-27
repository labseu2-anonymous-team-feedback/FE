import React, { Component } from 'react';
import styled from 'styled-components';
import * as V from 'victory';
import {
  white,
  extraSmallSpace,
  mediumSpace3,
  body1,
  body2,
  fadedBlue,
  bodyHero
} from '../../styles/variables';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data } = this.props;
    const {
      VictoryBar,
      VictoryChart,
      VictoryTheme,
      VictoryLegend,
      VictoryAxis
    } = V;
    let empty = 0;
    data.forEach((ques, i) => {
      if (ques.feedbacks.length === 0) {
        empty += 1;
      }
    });

    if (empty === data.length) {
      return (
        <div>
          <NoFeedback>No Response for this survey yet</NoFeedback>
        </div>
      );
    }
    return data.map((ques, i) => {
      if (ques.type === 'rating') {
        const { feedbacks } = ques;
        let freq = [];
        freq = [...new Array(10)].map((item, index) => {
          let count = 0;
          feedbacks.forEach((feedback, i) => {
            if (Number(feedback.rating) === index + 1) {
              count += 1;
            }
          });
          return count;
        }); // freq
        const xRange = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const processedData = (frequency, rating) =>
          rating.map((rate, i) => ({
            rating: rate,
            freq: frequency[i]
          }));
        const dataPlot = processedData(freq, xRange);

        return (
          <div key={ques.id}>
            <StyledHeader>{ques.question}</StyledHeader>
            <StyledDiv>
              <VictoryChart
                style={{ parent: { maxWidth: '90%' } }}
                // adding the material theme provided with Victory
                theme={VictoryTheme.material}
              >
                <VictoryLegend
                  x={5}
                  y={8}
                  gutter={5}
                  orientation="horizontal"
                  data={[
                    { name: 'x axis - rating', symbol: { fill: '#6bafe8' } },
                    {
                      name: 'y axis - number of votes',
                      symbol: { fill: '#6bafe8' }
                    }
                  ]}
                />
                <VictoryAxis tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
                <VictoryAxis
                  dependentAxis
                  tickFormat={x => (Number.isInteger(x) ? x : '')}
                />
                <VictoryBar
                  style={{ data: { fill: '#6bafe8' } }}
                  data={dataPlot}
                  // data accessor for x values
                  x="rating"
                  // data accessor for y values
                  y="freq"
                />
              </VictoryChart>
            </StyledDiv>
          </div>
        );
      }
      return (
        <div key={ques.id}>
          <StyledHeader>{ques.question}</StyledHeader>
          <TextBox>
            {ques.feedbacks.map(feedback => (
              <div key={feedback.id}>
                {feedback.comment && <Paragraph>{feedback.comment}</Paragraph>}
              </div>
            ))}
          </TextBox>
        </div>
      );
    });
  }
}

const StyledHeader = styled.h4`
  margin: ${mediumSpace3} 0 ${extraSmallSpace} 0;
  font-size: ${body1};
`;
const StyledDiv = styled.div`
  border: 1px solid ${fadedBlue};
  display: flex;
  justify-content: center;
  background-color: ${white};
  width: 75%;

  @media (max-width: 767px) {
    width: 100%;
  }
`;
const TextBox = styled.div`
  font-size: ${body2};
  background-color: ${white};
  min-height: ${extraSmallSpace};
  width: 75%;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const Paragraph = styled.p`
  border: 1px solid ${fadedBlue};
  padding: ${extraSmallSpace} ${extraSmallSpace};
`;
const NoFeedback = styled.div`
  border: 1px solid ${fadedBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${bodyHero};
  background-color: ${white};
  width: 75%;
  height: 30vh;
`;
export default Chart;
