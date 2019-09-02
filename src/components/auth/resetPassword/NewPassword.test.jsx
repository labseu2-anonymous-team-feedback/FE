import React from 'react';
import { shallow } from 'enzyme';

import NewPassword from './NewPassword';

describe('<NewPassword />', () => {
  it('renders the NewPassword component correctly', () => {
    const wrapper = shallow(<NewPassword />);
    expect(wrapper).toMatchSnapshot();
  });
});
