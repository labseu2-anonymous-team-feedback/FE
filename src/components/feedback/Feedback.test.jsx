import React from 'react';
import { shallow } from 'enzyme';

import { Feedback } from './Feedback';

describe('<Feedback />', () => {
  it('renders the Feedback component correctly', () => {
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
    // eslint-disable-next-line react/jsx-props-no-spreading
    const wrapper = shallow(<Feedback {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
