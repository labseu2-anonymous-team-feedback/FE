import React from 'react';
import { shallow } from 'enzyme';

import OptionSelect from './OptionSelect';

describe('<OptionSelect />', () => {
  it('renders the OptionSelect component correctly', () => {
    const wrapper = shallow(<OptionSelect />);
    expect(wrapper).toMatchSnapshot();
  });
});
