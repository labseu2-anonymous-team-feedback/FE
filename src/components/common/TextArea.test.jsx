import React from 'react';
import { shallow } from 'enzyme';

import TextArea from './TextArea';

describe('<TextArea />', () => {
  it('renders the TextArea component correctly', () => {
    const wrapper = shallow(<TextArea />);
    expect(wrapper).toMatchSnapshot();
  });
});
