import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Signup } from './Signup';

describe('<Signup />', () => {
  const props = {
    location: { search: jest.mock() },
    client: { mutate: jest.fn(), query: jest.fn() },
    history: { push: jest.fn() },
  };

  it('renders the Signup component correctly', () => {
    const wrapper = shallow(<Signup {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call the mock onChange function', () => {
    const wrapper = shallow(<Signup {...props} />);

    const event = { target: { name: 'pollName', value: 'spam' } };

    sinon.spy(wrapper.instance(), 'onChange');
    wrapper.instance().onChange(event);
    expect(wrapper.instance().onChange.calledOnce).toEqual(true);
    expect(wrapper.instance().onChange.calledWith(event));
  });

  it('should call onSubmit function', () => {
    const event = { target: { name: 'pollName', value: 'spam' } };
    const mockState = {
      isSignedIn: true,
      username: 'easybuoy',
      email: 'izzy@gmail.com',
      password: '123456',
      confirmPassword: '',
      error: '',
      data: '',
      isLoading: '',
    };
    const wrapper = shallow(<Signup {...props} />);
    sinon.spy(wrapper.instance(), 'onSubmit');
    wrapper.instance().onChange(event);
    wrapper.setState({ ...mockState });

    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(wrapper.instance().onSubmit.calledOnce).toEqual(true);
    expect(wrapper.instance().onSubmit.calledWith(event));
    // expect(props.client).toBeCalled();
  });

  it('should call onSubmit function', () => {
    const event = { target: { name: 'pollName', value: 'spam' } };
    const mockState = {
      isSignedIn: true,
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      error: '',
      data: '',
      isLoading: '',
    };
    const wrapper = shallow(<Signup {...props} />);
    // wrapper.instance().onChange(event);
    wrapper.setState({ ...mockState });
    const instance = wrapper.instance();
    expect(instance.state).toEqual(mockState);
    // sinon.spy(wrapper.instance(), 'onSubmit');
    // wrapper.instance().onSubmit(event);
    // expect(wrapper.instance().onSubmit.calledOnce).toEqual(true);
    // expect(wrapper.instance().onSubmit.calledWith(event));
  });

  it('should show error message', () => {
    const mockState = {
      isSignedIn: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      error: { message: 'Invalid credentials' },
      data: '',
      isLoading: '',
    };
    const wrapper = shallow(<Signup {...props} />);

    wrapper.setState({ ...mockState });
    expect(wrapper).toMatchSnapshot();
  });

  it('should reload if registration is successfull', () => {
    const mockState = {
      isSignedIn: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      error: '',
      data: 'Login successfull',
      isLoading: '',
    };
    const wrapper = shallow(<Signup {...props} />);

    wrapper.setState({ ...mockState });

    expect(wrapper).toMatchSnapshot();
  });
});
