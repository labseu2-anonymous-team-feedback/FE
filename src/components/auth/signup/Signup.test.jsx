import React from 'react';
import { shallow, mount } from 'enzyme';
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

    const wrapper = shallow(<Signup {...props} />);
    sinon.spy(wrapper.instance(), 'onSubmit');
    wrapper.instance().onChange(event);
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(wrapper.instance().onSubmit.calledOnce).toEqual(true);
    expect(wrapper.instance().onSubmit.calledWith(event));
  });
});
