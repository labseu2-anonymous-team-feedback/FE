import React from 'react';
import { shallow } from 'enzyme';

import ResetPassword from './ResetPassword';

describe('<ResetPassword />', () => {
  it('renders the ResetPassword component correctly', () => {
    const wrapper = shallow(<ResetPassword />);
    expect(wrapper).toMatchSnapshot();
  });
});
