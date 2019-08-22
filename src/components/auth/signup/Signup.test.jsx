import React from 'react';
import { shallow } from 'enzyme';

import Signup from './Signup';

describe('<Signup />', () => {
  it('renders the Signup component correctly', () => {
    const wrapper = shallow(<Signup />);
    expect(wrapper).toMatchSnapshot();
  });
});
