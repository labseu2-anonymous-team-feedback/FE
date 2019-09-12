import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { withRouter } from 'react-router-dom';

import ResetPassword from './ResetPassword';

describe('<ResetPassword />', () => {
  const props = {
    setEmail: jest.fn(),
    history: { push: jest.fn() },
  };
  it('renders the ResetPassword component correctly', () => {
    const wrapper = shallow(<ResetPassword />);
    expect(wrapper).toMatchSnapshot();
  });

  // it('should call the mock handleChangeQuestion function', () => {
  //   const event = Object.assign(jest.fn(), { preventDefault: () => {} });

  //   const wrapper = shallow(<ResetPassword {...props} />);
  //   // sinon.spy(wrapper.instance(), 'onChange');
  //   // wrapper.instance().onChange();
  //   // expect(wrapper.instance().onChange.calledOnce).toEqual(true);
  //   // expect(wrapper.instance().onChange.calledWith(event));

  //   wrapper
  //     .find('.form-control .mb-4')
  //     .simulate('change', { preventDefault() {} });
  //   expect(props.setEmail).toBeCalled();
  // });
});
