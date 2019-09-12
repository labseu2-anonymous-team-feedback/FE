import React from 'react';
import { shallow } from 'enzyme';

import ProfileImage from './ProfileImage';

describe('<ProfileImage />', () => {
  const props = {
    handleChangeQuestion: jest.fn(),
    removeQuestion: jest.fn(),
    question: jest.mock(),
    history: { push: jest.fn() },
  };

  it('renders the ProfileImage component correctly', () => {
    const wrapper = shallow(<ProfileImage {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
