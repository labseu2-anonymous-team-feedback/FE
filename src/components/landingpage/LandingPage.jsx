/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import { Link } from 'react-router-dom';
import MainArea from './MainArea';

import FeedbackVideo from '../../assets/media/feedback.mp4';
import SampleSurvey from '../../assets/media/Sample Survey.gif';
import Divider from '../../styles/Divider';
// import StyledDetailsArea from './LandingPageStyles';

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
        <div>
          <p>
            Users can easily Signup for free by fiiling out the registration
            form or if they have an
            <br />
            active Google account they can just click the google icon to get
            started.
          </p>
        </div>

        <h3>Create a Survey </h3>
        <div>
          <p>
            Signed up users can easily create a survey with as many questions as
            they like.
            <br />
            Survey questions can either receive feedback as text or rating.
          </p>
        </div>

        <h3>Share Survey Link to Co-worker </h3>
        <div>
          <p>
            On creating a survey users can generate a Share link by clicking the
            get link icon.
            <br />
            This link can be shared with as many people as the user pleases.
            Responses to this
            <br />
            survey are received anonymously by the user, thus creating an avenue
            for honest feedback
          </p>
        </div>

        <h3>Give Feedback Anonymously</h3>
        <div>
          <p>
            User giving feedback need not create an account or be signed up to
            the platform.
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

    <StyledTeamArea>
      <h3>Meet the amazing team behind Anonymous Team Feedback</h3>
      <div>
        <a
          href="https://www.linkedin.com/in/thorben-bender/"
          target="_blank"
          rel="noopener noreferrer"
        >
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
        <a
          href="https://www.linkedin.com/in/awa-melvine-472764102/"
          target="_blank"
          rel="noopener noreferrer"
        >
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
        <a
          href="https://www.linkedin.com/in/jakubmaleta/"
          target="_blank"
          rel="noopener noreferrer"
        >
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
        <a
          href="https://www.linkedin.com/in/pascal-ulor/"
          target="_blank"
          rel="noopener noreferrer"
        >
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

        <p>Receive honest feedback from your team mates with 100% anonymity.</p>
        <div>
          <Link to="/register">
            <Button className="btn btn-block" type="submit">
              Register Now
            </Button>
          </Link>
        </div>
      </div>
    </StyledJoinCommunity>
  </div>
);

export default LandingPage;
