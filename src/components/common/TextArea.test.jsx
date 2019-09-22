import React from 'react';
import { shallow, mount } from 'enzyme';

import TextArea from './TextArea';

describe('<TextArea />', () => {
  const props = {
    onChange: jest.fn(),
  };
  it('renders the TextArea component correctly', () => {
    const wrapper = shallow(<TextArea />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call the mock onChange function', () => {
    const wrapper = mount(<TextArea {...props} />);

    wrapper.find('textarea').simulate('change', { preventDefault() {} });
    expect(props.onChange).toBeCalled();
  });
});
