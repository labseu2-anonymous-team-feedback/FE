import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { ResultSort } from './ResultSort';


const mockProps = {
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
  wrapper = shallow(<ResultSort {...mockProps} />);
});
describe('<ResultSort />', () => {
  it('renders the ResultSort component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
