import styled from 'styled-components';

const StyledDetailsArea = styled.div`
  display: flex;
  flex-wrap: 'wrap';
  justify-content: center;
  width: 100%;
  padding: 2rem 1rem;

  .details-content {
    width: 45%;

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

    video {
      width: 100%;
    }
  }
`;

export default StyledDetailsArea;
