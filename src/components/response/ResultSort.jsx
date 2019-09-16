import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Chart from './Chart';
import { extraLargeSpace } from '../../styles/variables';


export class ResultSort extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { questions } = this.props;
    return (
      <ResultContainer>
        <Chart data={questions} />
      </ResultContainer>
    );
  }
}

const ResultContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin: 0 0 0 ${extraLargeSpace};
`;

ResultSort.propTypes = {
  questions: propTypes.arrayOf(propTypes.object).isRequired,
};

export default ResultSort;
