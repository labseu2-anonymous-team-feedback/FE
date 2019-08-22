import styled from 'styled-components';

const Signup = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .passwordContainer {
    width: 48%;
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
      }
    }
  }
`;

export default Signup;
