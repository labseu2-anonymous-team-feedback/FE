import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Signup } from './Signup';

describe('<Signup />', () => {
  let wrapper;
  const props = {
    location: { search: jest.mock() },
    client: { mutate: jest.fn(), query: jest.fn() },
    history: { push: jest.fn() },
  };

  beforeEach(() => {
    wrapper = shallow(<Signup {...props} />);
  });

  it('renders the Signup component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call the mock onChange function', () => {
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

    sinon.spy(wrapper.instance(), 'onSubmit');
    wrapper.instance().onChange(event);
    wrapper.setState({ ...mockState });

    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(wrapper.instance().onSubmit.calledOnce).toEqual(true);
    expect(wrapper.instance().onSubmit.calledWith(event));
  });

  it('should redirect if isSignedin is true', () => {
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

    wrapper.setState({ ...mockState });
    expect(wrapper.instance().state).toEqual(mockState);
    expect(wrapper).toMatchSnapshot();
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

    wrapper.setState({ ...mockState });

    expect(wrapper).toMatchSnapshot();
  });
});
