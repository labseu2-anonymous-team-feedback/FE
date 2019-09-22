import React, { Component } from 'react';
import styled from 'styled-components';
import Chart from './Chart';
import { extraLargeSpace } from '../../styles/variables';


class ResultSort extends Component {
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

export default ResultSort;
