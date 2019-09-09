import { gql } from 'apollo-boost';

const IS_LOGGED_IN = gql`
  query isLoggedIn {
    isLoggedIn @client
  }
`;

const GET_SURVEY_DETAILS = gql`
  query getSurveyDetails($surveyId: String!) {
    getSurveyDetails(surveyId: $surveyId) {
      title
      questions {
        id
        question
        type
      }
    }
  }
`;

export { IS_LOGGED_IN, GET_SURVEY_DETAILS };
