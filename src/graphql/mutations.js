import { gql } from 'apollo-boost';

const LOGIN_MUTATION = gql`
  mutation userLogin($email: String!, $password: String!) {
    userLogin(email: $email, password: $password) {
      username
      email
      id
      token
    }
  }
`;

const CREATE_ACCOUNT = gql`
  mutation createAccount(
    $username: String!
    $email: String!
    $password: String!
  ) {
    createAccount(username: $username, email: $email, password: $password) {
      username
      email
      id
    }
  }
`;

const CREATE_NEW_SURVEY = gql`
  mutation createNewSurvey($title: String!) {
    createNewSurvey(title: $title) {
      id
      title
      owner {
        username
      }
    }
  }
`;

const GOOGLE_AUTH_MUTATION = gql`
  # mutation google($accessToken: String!) {
  #   authGoogle(googleAccessToken: $accessToken) {
  #     username
  #     email
  #     token
  #   }
  # }
  mutation google ($accessToken: String!){
    authGoogle(googleAccessToken:{
      accessToken: $accessToken
    }) {
      username
      email
      token
    }
  }
`;

export {
  CREATE_ACCOUNT,
  LOGIN_MUTATION,
  CREATE_NEW_SURVEY,
  GOOGLE_AUTH_MUTATION,
};
