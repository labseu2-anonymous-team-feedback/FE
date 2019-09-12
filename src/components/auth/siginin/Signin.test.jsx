import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { Signin } from './Signin';

describe('<Signin />', () => {
  const props = {
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
  // it('should call onSubmit function', () => {
  //   const event = { target: { name: 'pollName', value: 'spam' } };
  //   const mockState = {
  //     isSignedIn: true,
  //   };
  //   const wrapper = shallow(<Signin {...props} />);
  //   // wrapper.instance().onChange(event);
  //   wrapper.setState({ ...mockState });
  //   const instance = wrapper.instance();
  //   expect(instance.state).toEqual(mockState);
  //   // sinon.spy(wrapper.instance(), 'onSubmit');
  //   // wrapper.instance().onSubmit(event);
  //   // expect(wrapper.instance().onSubmit.calledOnce).toEqual(true);
  //   // expect(wrapper.instance().onSubmit.calledWith(event));
  // });
});
