/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import styled from 'styled-components';
import MainArea from './MainArea';
import { white } from '../../styles/variables';
import FeedbackVideo from '../../assets/media/feedback.mp4';

const LandingPage = () => (
  <div>
    <MainArea />
    <div>
      <div>
        <h1>Mee</h1>
      </div>
      <div>
        <video autoPlay="true" loop="true" playsInline="" style={{ width: '100%', height: '400px' }}>
          <source src={FeedbackVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  </div>
);

export default LandingPage;
