import React from 'react';
import { shallow } from 'enzyme';

import { Feedback } from './Feedback';

const mockProps = {
  match: {
    params: { surveyId: 'c71ca084-6c21-4ef8-b4fe-566ebb06c994' },
  },
  history: { push: jest.fn() },
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
      question: 'test rating question',
      type: 'rating',
    },
    {
      id: 2,
      question: 'test text question',
      type: 'text',
    },
  ],
};
const mockAnswers = [
  {
    questionId: 1,
    rating: '',
  },
  {
    questionId: 2,
    comment: '',
  },
];
let wrapper;
beforeAll(() => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  wrapper = shallow(<Feedback {...mockProps} />);
});
describe('<Feedback />', () => {
  it('renders the Feedback component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should mount the component', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'fetchSurvey');
    jest.spyOn(instance, 'initializeAnswers');
    instance.componentDidMount();
    expect(instance.fetchSurvey).toHaveBeenCalledWith(
      mockProps.match.params.surveyId,
    );
    expect(instance.state.error).toBeDefined();
    expect(instance.initializeAnswers).not.toBeCalled();
  });
  it('should fetch initialize state if surveyId params is defined', () => {
    const instance = wrapper.instance();

    jest.spyOn(instance, 'fetchSurvey').mockImplementation(
      jest.fn(() => {
        instance.setState({ isLoading: false, survey: mockSurvey, answer: mockAnswers });
      }),
    );
    instance.componentDidMount();
    expect(instance.state.survey).toEqual(mockSurvey);
  });

  it('should not fetch survey if surveyId params is not defined', () => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    const component = shallow(<Feedback {...{ match: { params: {} } }} />);
    const instance = component.instance();
    jest.spyOn(instance, 'fetchSurvey').mockImplementation(jest.fn());
    instance.componentDidMount();
    expect(instance.fetchSurvey).not.toBeCalled();
  });

  it('should render error if error occurs during survey fetch', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'fetchSurvey');
    instance.componentDidMount();
    expect(instance.state.error).toBeDefined();
  });

  it('should simulate changeHandler', () => {
    const event = { target: { value: 'dummy value' } };
    const instance = wrapper.instance();
    instance.setState({ answers: mockAnswers });
    jest.spyOn(instance, 'updateState');
    instance.changeHandler(event, 2);
    expect(instance.updateState).toHaveBeenCalledWith('dummy value', 2);
    expect(instance.state.answers[1]).toHaveProperty('comment', 'dummy value');
  });

  it('should simulate ratingHandler', () => {
    const instance = wrapper.instance();
    instance.setState({ answers: mockAnswers });
    jest.spyOn(instance, 'updateState');
    instance.ratingHandler('2', 1);
    expect(instance.updateState).toHaveBeenCalledWith('2', 1, true);
    expect(instance.state.answers[0]).toHaveProperty('rating', '2');
  });
});
