import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { Response } from './Response';

const mockProps = {
  match: {
    params: { surveyId: 'c71ca084-6c21-4ef8-b4fe-566ebb06c994' },
  },
  client: {
    query: jest.fn(),
    mutate: jest.fn(),
  },
};

const mockSurvey = {
  title: 'test title',
  id: '234455-2345',
  questions: [
    {
      id: 1,
      type: 'text',
      question: 'What do you say about my overall usefulness in the team for the past 4 months?',
      feedbacks: [
        {
          id: 1,
          rating: '7',
          comment: null,
        },
        {
          id: 2,
          rating: null,
          comment: "It's been quite incredible",
        },
      ],
    },
    {
      id: 2,
      type: 'text',
      question: 'What do you say about my overall usefulness in the team for the past 4 months?',
      feedbacks: [
        {
          id: 1,
          rating: null,
          comment: "It's been quite incredible",
        },
        {
          id: 2,
          rating: 3,
          comment: null,
        },
      ],
    },
  ],
};

let wrapper;
beforeAll(() => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  wrapper = shallow(<Response {...mockProps} />);
});
describe('<Response />', () => {
  it('renders the Response component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should mount the component', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'getSurveyDetails');
    instance.componentDidMount();
    expect(instance.getSurveyDetails).toHaveBeenCalledWith(
      mockProps.match.params.surveyId,
    );
    expect(instance.state.surveyId).toEqual(mockProps.match.params.surveyId);
  });

  it('should initialize state if surveyId params is defined', () => {
    const instance = wrapper.instance();

    jest.spyOn(instance, 'getSurveyDetails').mockImplementation(
      jest.fn(() => {
        instance.setState({ loading: false, survey: mockSurvey });
      }),
    );
    instance.componentDidMount();
    expect(instance.state.survey).toEqual(mockSurvey);
  });
});
