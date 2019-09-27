/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import styled from 'styled-components';

import MainArea from './MainArea';
import { white } from '../../styles/variables';
import FeedbackVideo from '../../assets/media/feedback.mp4';
import { StyledDetailsArea, StyledTeamArea } from './LandingPageStyles';
import styledImageAreaImage from '../../assets/images/giving-feedback.png';

const LandingPage = () => (
  <div>
    <MainArea />
    <StyledDetailsArea
      style={{
        backgroundImage: `linear-gradient(to right bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${styledImageAreaImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
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

    <StyledTeamArea>
      <div>
        <img
          src="https://ca.slack-edge.com/T4JUEB3ME-UHZ97G3T6-6744874ab7d9-72"
          alt="Melvine"
        />
        <p>
          <a href="##">Awa Melvine</a>
        </p>
        <p>
          <a href="##">Full-stack developer</a>
        </p>
      </div>

      <div>
        <img
          src="https://ca.slack-edge.com/T4JUEB3ME-UJ01FL4R3-83dd18af8f1c-72"
          alt="Chinedu"
        />
        <p>
          <a href="##">Chiendu Orie</a>
        </p>
        <p>
          <a href="##">Full-stack developer</a>
        </p>
      </div>

      <div>
        <img
          src="https://ca.slack-edge.com/T4JUEB3ME-UHZ97G3T6-6744874ab7d9-72"
          alt="Melvine"
        />
        <p>
          <a href="##">Awa Melvine</a>
        </p>
        <p>
          <a href="##">Full-stack developer</a>
        </p>
      </div>

      <div>
        <img
          src="https://ca.slack-edge.com/T4JUEB3ME-UHZ97G3T6-6744874ab7d9-72"
          alt="Melvine"
        />
        <p>
          <a href="##">Awa Melvine</a>
        </p>
        <p>
          <a href="##">Full-stack developer</a>
        </p>
      </div>

      <div>
        <img
          src="https://ca.slack-edge.com/T4JUEB3ME-UHZ97G3T6-6744874ab7d9-72"
          alt="Melvine"
        />
        <p>
          <a href="##">Awa Melvine</a>
        </p>
        <p>
          <a href="##">Full-stack developer</a>
        </p>
      </div>

      <div>
        <img
          src="https://ca.slack-edge.com/T4JUEB3ME-UHZ97G3T6-6744874ab7d9-72"
          alt="Melvine"
        />
        <p>
          <a href="##">Awa Melvine</a>
        </p>
        <p>
          <a href="##">Full-stack developer</a>
        </p>
      </div>
    </StyledTeamArea>
  </div>
);

export default LandingPage;
