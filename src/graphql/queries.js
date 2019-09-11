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
const GET_SURVEY_DETAILS = gql`
  query getSurveyDetails($surveyId: String!) {
    getSurveyDetails(surveyId: $surveyId) {
      title
      id
      questions {
        id
        question
        type
      }
    }
  }
`;

export { IS_LOGGED_IN, GET_SURVEYS, GET_SURVEY_DETAILS };
