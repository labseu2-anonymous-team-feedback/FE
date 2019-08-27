import { gql } from 'apollo-boost';

const IS_LOGGED_IN = gql`
  query isLoggedIn {
    isLoggedIn @client
  }
`;

export { IS_LOGGED_IN };
