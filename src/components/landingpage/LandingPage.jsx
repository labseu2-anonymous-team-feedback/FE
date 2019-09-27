/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import styled from 'styled-components';

import MainArea from './MainArea';
import { white } from '../../styles/variables';
import FeedbackVideo from '../../assets/media/feedback.mp4';
import StyledDetailsArea from './LandingPageStyles';
import image from '../../assets/images/giving-feedback.png';
const LandingPage = () => (
  <div>
    <MainArea />
    <StyledDetailsArea
      style={{
        backgroundImage: `linear-gradient(to right bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="details-content">
        <h3>Signup </h3>
        <p>Signup to the application using your email or google</p>

        <h3>Create a Survey </h3>
        <p>Create a survey with a list of questions </p>

        <h3>Share Survey Link to Co-worker </h3>
        <p>On your dashboard, you would see the link </p>
      </div>

      <div className="details-media">
        <video autoPlay loop playsInline="">
          <source src={FeedbackVideo} type="video/mp4" />
        </video>
      </div>
    </StyledDetailsArea>
  </div>
);

export default LandingPage;
