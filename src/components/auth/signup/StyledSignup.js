import styled from 'styled-components';

const Signup = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
  justify-content: center;
  align-items: center;

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

  .optional-login {
    width: 50%;
    margin-bottom: 1rem;
    img {
      width: 300px;
    }
  }
`;

export default Signup;
