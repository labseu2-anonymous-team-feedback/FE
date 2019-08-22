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
`;

export { Signup };
