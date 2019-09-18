import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import { ResetPassword } from './ResetPassword';

describe('<ResetPassword />', () => {
  let wrapper;

  const props = {
    setEmail: jest.fn(),
    history: { push: jest.fn() },
  };

  beforeEach(() => {
    wrapper = shallow(<ResetPassword {...props} />);
  });

  it('renders the ResetPassword component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });


});
