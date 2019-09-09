import React, { Component } from 'react';
import styled from 'styled-components';
import * as d3 from 'd3';
import { white } from '../../styles/variables';

const svgWidth = 650;
const svgHeight = 400;
const margin = {
  top: 20, right: 5, bottom: 20, left: 35,
};

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bars: [],
    };
  }


  static getDerivedStateFromProps(nextProps, prevState) {
    const { data } = nextProps;
    // console.log(data);
    if (!data) return {};
    const ansCheck = data.filter((d) => d.type !== 'text');
    const quesISort = [...new Set(ansCheck.map((d) => d.questionId))];

    const processedData = (arr1, arr2) => {
      const sortData = [];
      arr1.map((id) => arr2.map((ans) => {
        let count = 0;
        if (id === ans.questionId) {
          sortData.push({
            tally: count += 1,
            rating: ans.rating,
          });
        }
      }));
      return sortData;
    };
    const analysis = processedData(quesISort, ansCheck);
    console.log(analysis);

    const extent = d3.extent(analysis, (d) => d.rating);
    const xScale = d3.scaleLinear()
      .domain(extent)
      .range([margin.left, svgWidth - margin.right]);

    const [min, max] = d3.extent(analysis, (d) => d.tally);
    const yScale = d3.scaleLinear()
      .domain([Math.min(min, 0), max])
      .range([svgHeight - margin.bottom, margin.top]);

    const colorExtent = d3.extent(analysis.map((d) => d.tally)).reverse();
    const colorScale = d3.scaleSequential()
      .domain(colorExtent).interpolator(d3.interpolateRdYlBu);

    const bars = analysis.map((d) => ({
      x: xScale(d.rating),
      y: yScale(d.tally),
      height: yScale(d.tally),
      fill: colorScale(d.tally),
    }));

    return { bars, xScale, yScale };
  }

  render() {
    const { data } = this.props;
    const { bars } = this.state;
    return (
      data.map((ques) => {
        return (
          <div>
            <h3>{ques.question}</h3>
            <StyledChart width={svgWidth} height={svgHeight}>
              {bars.map((d, i) => (
                <rect
                  x={d.x}
                  y={d.y}
                  width={2}
                  height={svgHeight - d.height}
                  fill={d.fill}
                  key={i}
                />
              ))}
            </StyledChart>
          </div>
        );
      })

    );
  }
}

const StyledChart = styled.svg`
background-color: ${white};
`;

export default Chart;
