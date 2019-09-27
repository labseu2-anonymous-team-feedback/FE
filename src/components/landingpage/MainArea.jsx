import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  white, smallSpace, black, bodyHero, mediumSpace2, heading1,
} from '../../styles/variables';
import Button from '../../styles/Button';

const MainArea = () => (
  <Wrapper>
    <TextArea>
      <div className="text">
        <h1>Anonymous Team Feedback</h1>
        <p>Improve team performance by giving and receiving feedback anonymously from team-mates</p>
      </div>


      <div className="buttons-container ">
        <Link to="/register">
          <Button className="btn btn-block" type="submit">
            Get Started
          </Button>
        </Link>
      </div>
    </TextArea>
  </Wrapper>
);


const Wrapper = styled.div`
min-height: 76vh;
margin: 0 auto;
max-width: 100%;
padding: 0 ${smallSpace};
display: flex;
align-items: center;
background: ${white};
`;

const TextArea = styled.div`
position: relative;
margin: 0 auto;
height: 100%;
width: 30%;
font-size: 5rem;
display: flex;
flex-direction: column;
justify-content: center;

::before {
    right: 100%;
}
::after {
    left: 100%;
}

::before, ::after {
    content: "";
    display: block;
    background: url('../../assets/images/mobile.png');
    position: absolute;
    border-top: 1px solid #404545;
    width: 6.25rem;
    height: 6rem;
    top: 50%;
    margin: 0 15rem;
}

h1,
  p {
    color: ${black};
  }

  h1 {
    font-weight: 600;
    font-size: ${heading1};
  }

  p {
    font-size: ${bodyHero};
    margin-bottom: ${mediumSpace2};
  }
  .text {
    
    text-align: center;
  }


  .buttons-container {
    width: 60%;
    margin: 0 auto;
    button {
      margin-bottom: ${smallSpace};
      margin-right: ${smallSpace};
    }
  }

`;

export default MainArea;
