import { gql } from 'apollo-boost';

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

export { IS_LOGGED_IN, GET_SURVEY_FEEDBACK };
