import styled from 'styled-components';

const StyledDetailsArea = styled.div`
  display: flex;
  flex-wrap: 'wrap';
  justify-content: center;
  width: 100%;
  padding: 2rem 1rem;

  @media (max-width: 1400px) {
    flex-direction: column;
  }

  .details-content {
    width: 45%;

    @media (max-width: 1400px) {
      width: 100%;
      text-align: center;
      margin-bottom: 2rem;
    }

    h3 {
      color: #62beff;
    }

    p {
      margin: 1rem 0;
      color: #6f6f6f;
    }
  }

  .details-media {
    width: 50%;

    @media (max-width: 1400px) {
      width: 100%;
      margin-top: 2rem;
    }

    video {
      width: 100%;
    }
  }
`;

const StyledTeamArea = styled.section`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  text-align: center;
  margin-top: 1rem;
  padding-bottom: 3rem;
  justify-content: center;

  a {
    color: #6f6f6f;
    text-decoration: none;
  }

  h3 {
    width: 100%;
    color: #62beff;
    margin: 1rem 0;
  }

  div {
    margin: 1rem;

    img {
      border-radius: 50%;
      width: 120px;
      height: 120px;
    }

    p {
      font-weight: bold;
      color: #6f6f6f;
    }
  }
`;

const StyledJoinCommunity = styled.section`
  width: 100%;
  text-align: center;
  justify-content: center;
  display: flex;
  padding: 2rem 0;
  background-color: rgba(54, 112, 198, 0.4);

  div {
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media (max-width: 700px) {
      width: 70%;
    }
    h3,
    p {
      width: 100%;
      padding: 1rem 0;
    }

    button {
      margin: 1rem auto;

      a {
        text-decoration: none;
        color: white;
      }
    }
  }
`;

export { StyledDetailsArea, StyledTeamArea, StyledJoinCommunity };
