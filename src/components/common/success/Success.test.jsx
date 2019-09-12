import React from 'react';
import { shallow } from 'enzyme';

import Success from './Success';

describe('<Success />', () => {
  it('renders the Success component correctly', () => {
    const wrapper = shallow(<Success />);
    expect(wrapper).toMatchSnapshot();
  });
});
