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
  margin: 1rem;
  justify-content: center;

  div {
      margin: 0 1rem;

    img {
      border-radius: 50%;
      width: 120px;
      height: 120px;
    }
  }
`;

export { StyledDetailsArea, StyledTeamArea };
