import React from 'react';
import { shallow } from 'enzyme';

import TextInput from './TextInput';

describe('<TextInput />', () => {
  it('renders the TextInput component correctly', () => {
    const wrapper = shallow(<TextInput />);
    expect(wrapper).toMatchSnapshot();
  });
});
