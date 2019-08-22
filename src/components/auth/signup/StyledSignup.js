import styled from 'styled-components';

const Signup = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  height: 100vh;

  form {
    width: 50%;
    @media (max-width: 1400px) {
      width: 60%;
    }

    @media (max-width: 1200px) {
      width: 70%;
    }

    @media (max-width: 1050px) {
      width: 85%;
    }

    @media (max-width: 870px) {
      width: 95%;
    }
  }

  .passwordContainerDiv {
    @media (max-width: 780px) {
      flex-direction: column;
    }
    .passwordContainer {
      width: 48%;
      @media (max-width: 780px) {
        width: 100%;
      }
    }
  }

  .dividerContainer {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .divider {
      padding: 1rem;
      width: 47%;
    }
  }

  .optionalLoginContainer {
    @media (max-width: 780px) {
      flex-direction: column;
      align-items: center;
    }
    .optional-login {
      width: 50%;
      margin-bottom: 1rem;
      img {
        width: 300px;
        @media (max-width: 780px) {
          justify-content: center;
          width: 100%;
        }
      }
    }
  }
`;

export default Signup;
