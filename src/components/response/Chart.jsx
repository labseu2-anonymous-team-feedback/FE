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
      data.map((ques, i) => {
        if (ques.type === 'rating') {
          const extent = d3.extent(ques.feedbacks, (d) => Number(d.rating));
          const xScale = d3.scaleLinear().domain(extent).range([0, svgWidth]);
          const yScale = d3.scaleLinear().domain(extent).range([svgHeight, 0]);
          const bars = ques.feedbacks.map((d) => ({
            x: xScale(d.rating),
            y: yScale(d.rating),
            height: svgHeight - yScale(d.rating),
          }));
          console.log(bars);
          return (
            <div key={ques.id}>
              <StyledHeader>{ques.question}</StyledHeader>
              <StyledSvg width={svgWidth} height={svgHeight}>
                {bars.map((d, i) => (
                  <rect x={d.x} y={d.y} width={30} height={svgHeight - d.height} key={i} />
                ))}
              </StyledSvg>
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
const StyledSvg = styled.svg`
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
