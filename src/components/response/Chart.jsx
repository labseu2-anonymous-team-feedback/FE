import React, { Component } from 'react';
import styled from 'styled-components';
import * as d3 from 'd3';
import {
  white, extraSmallSpace, mediumSpace1, mediumSpace3, body1, body2, fadedBlue,
} from '../../styles/variables';

const svgWidth = 650;
const svgHeight = 400;
const margin = {
  top: 20, right: 5, bottom: 20, left: 35,
};

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    const { data } = this.props;
    return (
      data.map((ques) => {
        if (ques.type === 'rating') {
          return (
            <div key={ques.id}>
              <StyledHeader>{ques.question}</StyledHeader>
              <StyledChart width={svgWidth} height={svgHeight}>
                {/* Chart to be displayed here */}
              </StyledChart>
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
                  <p>{feedback.comment}</p>
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
const StyledChart = styled.svg`
background-color: ${white};
`;
const TextBox = styled.div`
font-size: ${body2};
background-color: ${white};
min-height: ${extraSmallSpace};
width: 75%;
padding: ${extraSmallSpace} ${extraSmallSpace};
`;

export default Chart;
