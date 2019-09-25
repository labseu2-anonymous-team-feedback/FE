import { gql } from 'apollo-boost';
import qql from 'graphql-tag';

const IS_LOGGED_IN = gql`
  query isLoggedIn {
    isLoggedIn @client
  }
`;

const GET_SURVEY_FEEDBACK = gql`
query getFeedback ($surveyId: String!) {
  getSurveyFeedback(surveyId: $surveyId){
    title
    questions{
      id
      type
      question
      feedbacks{
        id
        rating
        comment
      }
    }
  }
}
`;

const GET_SURVEYS = qql`
query getUserSurveys {
  getUserSurveys{
    id
    title
    owner{
      username
      email
    }
    questions { 
      id
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
      owner {
        id
      }
    }
  }
`;

export {
  IS_LOGGED_IN, GET_SURVEYS, GET_SURVEY_DETAILS, GET_SURVEY_FEEDBACK,
};
