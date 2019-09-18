import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { NewPassword } from './NewPassword';

describe('<NewPassword />', () => {
  let wrapper;
  const props = {
    setEmail: jest.fn(),
    history: { push: jest.fn() },
    match: { params: jest.mock() },
  };

  beforeEach(() => {
    wrapper = shallow(<NewPassword {...props} />);
  });

  it('renders the NewPassword component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call the mock onChange function', () => {
    const event = { target: { name: 'pollName', value: 'spam' } };

    sinon.spy(wrapper.instance(), 'onChange');
    wrapper.instance().onChange(event);
    expect(wrapper.instance().onChange.calledOnce).toEqual(true);
    expect(wrapper.instance().onChange.calledWith(event));
  });

  it('should redirect if isSignedin is true', () => {
    const mockState = {
      newPassword: '',
      newPasswordConfirm: '',
      redirectHome: true,
    };

    wrapper.setState({ ...mockState });
    expect(wrapper.instance().state).toEqual(mockState);
    expect(wrapper).toMatchSnapshot();
  });
});
