import React from 'react';
import { shallow } from 'enzyme';

import SideNavItem from './SideNavItem';

describe('<SideNavItem />', () => {
  const props = {
    icon: jest.mock(),
    text: jest.mock(),
    path: jest.mock(),
  };

  it('renders the SideNavItem component correctly', () => {
    const wrapper = shallow(<SideNavItem {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
