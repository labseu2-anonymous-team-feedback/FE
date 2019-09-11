import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_SURVEY_DETAILS } from '../../graphql/queries';

export function SurveyDetails(props) {
  const { data, loading } = useQuery(GET_SURVEY_DETAILS);
  console.log(data);
  return <div>bla, bla, bla</div>;
}

export default SurveyDetails;
