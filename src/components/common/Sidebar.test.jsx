import React from 'react';
import { shallow } from 'enzyme';

import Sidebar from './Sidebar';

describe('<Sidebar />', () => {
  it('renders the Sidebar component correctly', () => {
    const wrapper = shallow(<Sidebar />);
    expect(wrapper).toMatchSnapshot();
  });
});
