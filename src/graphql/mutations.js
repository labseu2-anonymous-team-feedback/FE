import { gql } from 'apollo-boost';

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
  mutation createNewSurvey {
    createNewSurvey($title: String!) {
      id
      title
      owner {
        username
      }
    }
  }
`;

export { CREATE_ACCOUNT, CREATE_NEW_SURVEY };
