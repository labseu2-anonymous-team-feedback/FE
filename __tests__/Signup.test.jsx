import React from 'react';
import { shallow } from 'enzyme';

import Signup from '../components/auth/signup/Signup';

describe('<Login />', () => {
  it('renders the Login component correctly', () => {
    const wrapper = shallow(<Signup />);
    expect(wrapper).toMatchSnapshot();
  });
});
