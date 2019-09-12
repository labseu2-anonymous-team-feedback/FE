import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { Signin } from './Signin';

describe('<Signin />', () => {
  const props = {
    mutate: jest.mock(),
    location: { search: jest.mock() },
    client: { mutate: jest.fn(), query: jest.fn() },
    history: { push: jest.fn() },
  };
  it('renders the Signin component correctly', () => {
    const wrapper = shallow(<Signin {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  // it('should check `componentDidMount()`', () => {
  //   const wrapper = shallow(<Signin {...props} />);

  //   wrapper.find('form').simulate('submit', { preventDefault() {} });

  //   const instance = wrapper.instance();
  //   sinon.spy(instance, 'onChange');
  //   expect(instance.onChange).toBeDefined();
  // });
});
