import { gql } from 'apollo-boost';
import qql from 'graphql-tag';

const IS_LOGGED_IN = gql`
  query isLoggedIn {
    isLoggedIn @client
  }
`;

const GET_SURVEYS = qql`
query getUserSurveys {
  getUserSurveys{
    title
    owner{
      username
      email
    }
  }
}

`;

export { IS_LOGGED_IN, GET_SURVEYS };
