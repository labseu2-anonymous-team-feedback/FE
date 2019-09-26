import styled from 'styled-components';
import TextInput from '../common/TextInput';

// export const OtherTextInput = styled(TextInput)`
//  width: 100px ;
// `;

export const MainContainer = styled.section`
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 900px;

  @media (max-width: 820px) {
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 570px) {
    width: 80%;
    height: 70%;
  }

  label {
    color: #777777;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    width: 30%;
    text-transform: uppercase;
    font-size: 10px;
    margin-right: 20px;
  }

  form {
    padding-bottom: 0.5rem;
    input {
      color: #777777;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      width: 80%;
      text-transform: uppercase;
      font-size: 10px;
      letter-spacing: 1px;
      margin-left: 2px;
    }

    h2 {
      padding-top: 0.5rem;
    }
  }

  .container {
    display: flex;
    justify-content: space-between;
    background: #ffffff;
    width: 650px;
    height: 600px;
    margin: 0 auto;
    box-shadow: 2px 5px 10px rgba(119, 119, 119, 0.5);

    @media (max-width: 580px) {
      width: 98%;
      height: 75%;
    }

    @media (max-width: 415px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  .profile {
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    input {
      width: 250px;

      @media (max-width: 415px) {
        width: 220px;
      }
    }

    .username-box {
      display: flex;
      justify-content: space-between;
      padding-top: 0.5rem;
      input {
        max-width: 300px;
        min-width: 100px;
        width: 100%;
        box-sizing: border-box;
      }
      @media (max-width: 580px) {
        display: flex;
        flex-direction: column;
      }
    }

    .mail-box {
      display: flex;
      justify-content: space-between;
      padding-top: 0.5rem;
      input {
        max-width: 300px;
        min-width: 100px;
        width: 100%;
        box-sizing: border-box;
      }

      @media (max-width: 580px) {
        display: flex;
        flex-direction: column;
      }
    }

    .password-box {
      display: flex;
      justify-content: space-between;
      padding-top: 0.5rem;
      input {
        max-width: 300px;
        min-width: 100px;
        width: 100%;
        box-sizing: border-box;
      }
      @media (max-width: 580px) {
        display: flex;
        flex-direction: column;
      }
    }

    .gender-box-wrapper {
      display: flex;
      width: 300px;
      padding: 1rem 0.5rem;
      border-radius: 5px;

      @media (max-width: 570px) {
        width: 170px;
      }

      .gender-box {
        display: flex;
        justify-content: space-between;
        width: 60%;

        li {
          display: flex;

          input {
            max-width: 80px;
            width: 100%;
            box-sizing: border-box;
          }
        }
      }
    }

    .text-box {
      display: flex;
      flex-direction: column;
      padding-top: 1rem;
    }

    h2 {
      padding-top: 0.5rem;
    }
  }

  .leftbox {
    ${''}
    width: 15%;
    height: 110%;
    background: #63beff;
    ${''}
  }

  .rightbox {
    width: 60%;
    height: 100%;

    .text-box {
      padding-top: 0.5rem;
    }
  }

  h1 {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #63beff;
    font-size: 1.3em;
    margin-top: 40px;
    margin-bottom: 35px;
  }

  h2 {
    color: #777777;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    width: 80%;
    text-transform: uppercase;
    font-size: 10px;
    letter-spacing: 1px;
    margin-left: 2px;
  }

  p {
    border-width: 1px;
    border-style: solid;
    border-image: linear-gradient(to right, #63beff, rgba(126, 211, 134, 0.5)) 1
      0%;
    border-top: 0;
    width: 80%;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 0.7em;
    padding: 7px 0;
    color: #070707;
  }

  span {
    font-size: 0.5em;
    color: #777777;
  }

  ${'' /* .btn {
           float: right;
           font-family: Verdana, Geneva, Tahoma, sans-serif;
           text-transform: uppercase;
           font-size: 10px;
           border: none;
           color: #63beff;
         } */}

  ${'' /* .btn:hover {
           text-decoration: underline;
           font-weight: 900;
         } */}

         input {
    border: 1px solid #dddddd;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    padding: 2px;
    margin: 0;
  }
`;

// export const InsideContainerLeft = styled.div`
//          padding-top: 100px;

//        `;

// export const InsideContainerRight = styled.div`
//          padding-top: 100px;

//        `;

export const ProfileImg = styled.img``;
