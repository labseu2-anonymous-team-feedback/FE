import React from 'react';
import { shallow } from 'enzyme';

import Signin from './Signin';

describe('<Signin />', () => {
  it('renders the Signin component correctly', () => {
    const wrapper = shallow(<Signin />);
    expect(wrapper).toMatchSnapshot();
  });
});
