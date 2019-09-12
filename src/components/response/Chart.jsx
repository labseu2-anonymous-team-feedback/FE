import React, { Component } from 'react';
import styled from 'styled-components';
import * as V from 'victory';
import {
  white, extraSmallSpace, mediumSpace1, mediumSpace3, body1, body2, fadedBlue,
} from '../../styles/variables';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data } = this.props;
    const { VictoryBar, VictoryChart, VictoryTheme } = V;
    return (
      data.map((ques, i) => {
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
          });// freq
          const xRange = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
          const processedData = (frequency, rating) => rating.map((rate, i) => ({
            rating: rate,
            freq: frequency[i],
          }));
          const dataPlot = processedData(freq, xRange);

          return (
            <div key={ques.id}>
              <StyledHeader>{ques.question}</StyledHeader>
              <StyledDiv>
                <VictoryChart
                  style={{ parent: { maxWidth: '70%' } }}
                // adding the material theme provided with Victory
                  theme={VictoryTheme.material}
                >
                  <VictoryBar
                    style={{ data: { fill: '#6bafe8' } }}
                    alignment="start"
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
              {
              ques.feedbacks.map((feedback) => (
                <div key={feedback.id}>
                  {feedback.comment && <Paragraph>{feedback.comment}</Paragraph>}
                </div>
              ))
            }

            </TextBox>
          </div>
        );
      })

    );
  }
}

const StyledHeader = styled.h4`
margin: ${mediumSpace3} 0 ${extraSmallSpace} 0;
font-size: ${body1}
`;
const StyledDiv = styled.div`
display: flex;
justify-content: center;
background-color: ${white};
width: 75%;
`;
const TextBox = styled.div`
font-size: ${body2};
background-color: ${white};
min-height: ${extraSmallSpace};
width: 75%;
`;

const Paragraph = styled.p`
border: 1px solid ${fadedBlue};
padding: ${extraSmallSpace} ${extraSmallSpace};
`;

export default Chart;
