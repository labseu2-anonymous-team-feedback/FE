import styled from 'styled-components';

const Signup = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  height: 100vh;

  form {
    width: 35%;
    background: white;
    padding-bottom: 1rem !important;
   
    @media (max-width: 870px) {
      width: 95%;
      border: 1px dashed red;
    }
   
    @media (max-width: 700px) {
      border: 1px dashed red;
      width: 95%;
    }

    @media (max-width: 500px) {
      width: 100%;
      padding: 2rem !important;
      border: 1px dashed red;
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
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media (max-width: 780px) {
      flex-direction: column;
      align-items: center;
    }

    img {
      width: 300px;
      margin-bottom: 1rem;
      
      @media (max-width: 780px) {
        justify-content: center;
        width: 100%;
      }
    }
  }
`;

export default Signup;
