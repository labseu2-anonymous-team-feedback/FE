/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import styled from 'styled-components';

import MainArea from './MainArea';
import { white } from '../../styles/variables';
import FeedbackVideo from '../../assets/media/feedback.mp4';
import SampleSurvey from '../../assets/media/Sample Survey.gif';
import Divider from '../../styles/Divider';
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
        <div>
          <p>
          Users can easily Signup for free by fiiling out the registration form or if they have an
            <br />
          active Google account they can just click the google icon to get started.

          </p>
        </div>


        <h3>Create a Survey </h3>
        <div>
          <p>
          Signed up users can easily create a survey with as many questions as they like.
            <br />
          Survey questions can either receive feedback as text or rating.

          </p>
        </div>

        <h3>Share Survey Link to Co-worker </h3>
        <div>
          <p>
          On creating a survey users can generate a Share link by clicking the get link icon.
            <br />
          This link can be shared with as many people as the user pleases. Responses to this
            <br />
          survey are received anonymously by the user, thus creating an avenue for honest feedback

          </p>
        </div>

        <h3>Give Feedback Anonymously</h3>
        <div>
          <p>
          User giving feedback need not create an account or be signed up to the platform.
            <br />
          All they need do is click the shared link and drop a response.
          </p>
        </div>
      </div>
      <div className="details-media">
        <img src={SampleSurvey} alt="Screenshots of product" />

        <Divider size={30} />

        <video autoPlay loop playsInline="">
          <source src={FeedbackVideo} type="video/mp4" />
        </video>
      </div>
    </StyledDetailsArea>
  </div>
);

export default LandingPage;
