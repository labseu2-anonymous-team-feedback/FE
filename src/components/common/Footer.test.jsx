import React from 'react';
import { shallow } from 'enzyme';

import Footer from './Footer';

describe('<Footer />', () => {
  it('renders the Footer component correctly', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
