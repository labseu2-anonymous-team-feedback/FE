/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import { Link } from 'react-router-dom';
import MainArea from './MainArea';

import FeedbackVideo from '../../assets/media/feedback.mp4';
import {
  StyledDetailsArea,
  StyledTeamArea,
  StyledJoinCommunity,
} from './LandingPageStyles';
import styledImageAreaImage from '../../assets/images/giving-feedback.png';
import Button from '../../styles/Button';

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
      <h3>Meet the amazing team behind Anonymous Team Feedback</h3>
      <div>
        <a href="###" target="_blank" rel="noopener noreferrer">
          <img
            src="https://ca.slack-edge.com/T4JUEB3ME-UETSHCVRC-4044525a12b9-72"
            alt="Thorben"
          />
        </a>
        <p>
          <a href="https://github.com/ThorbenBender">Thorben Bender</a>
        </p>
        <p>Team Lead</p>
      </div>

      <div>
        <a href="##" target="_blank" rel="noopener noreferrer">
          <img
            src="https://ca.slack-edge.com/T4JUEB3ME-UHZ97G3T6-6744874ab7d9-72"
            alt="Melvine"
          />
        </a>
        <p>
          <a href="https://github.com/AwaMelvine">Awa Melvine</a>
        </p>
        <p>Full-stack developer</p>
      </div>

      <div>
        <a
          href="https://www.linkedin.com/in/oriechinedu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://ca.slack-edge.com/T4JUEB3ME-UJ01FL4R3-83dd18af8f1c-72"
            alt="Chinedu"
          />
        </a>
        <p>
          <a href="https://github.com/nedssoft">Chiendu Orie</a>
        </p>
        <p>Full-stack developer</p>
      </div>

      <div>
        <a href="##" target="_blank" rel="noopener noreferrer">
          <img
            src="https://ca.slack-edge.com/T4JUEB3ME-UJ1A38QBA-c5f8414f6dfc-72"
            alt="Jakub"
          />
        </a>
        <p>
          <a href="https://github.com/nanoblit">Jakub Maleta</a>
        </p>
        <p>Full-stack developer</p>
      </div>

      <div>
        <a
          href="https://www.linkedin.com/in/easybuoy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://ca.slack-edge.com/T4JUEB3ME-UHQMX3CLS-c7b9a890d94e-72"
            alt="Ezekiel"
          />
        </a>
        <p>
          <a href="https://github.com/Easybuoy">Ezekiel Ekunola</a>
        </p>
        <p>Full-stack developer</p>
      </div>

      <div>
        <a href="##" target="_blank" rel="noopener noreferrer">
          <img
            src="https://ca.slack-edge.com/T4JUEB3ME-UHND7CK6E-142effe9cb1c-72"
            alt="Pascal"
          />
        </a>
        <p>
          <a href="##">Pascal Ulor</a>
        </p>
        <p>Full-stack developer</p>
      </div>

      <div>
        <a
          href="https://www.linkedin.com/in/hiborija/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://ca.slack-edge.com/T4JUEB3ME-UHR82B0LQ-6af7ebe14470-72"
            alt="Petar"
          />
        </a>
        <p>
          <a href="https://github.com/PressureandTime">Petar Scepanovic</a>
        </p>
        <p>Full-stack developer</p>
      </div>
    </StyledTeamArea>

    <StyledJoinCommunity>
      <div>
        <h3>Join Our Community Now</h3>

        <p></p>
        <Button className="btn btn-block">
          <Link to="/register">Register Now</Link>
        </Button>
      </div>
    </StyledJoinCommunity>
  </div>
);

export default LandingPage;
