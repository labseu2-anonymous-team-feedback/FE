import React from 'react';
import { shallow } from 'enzyme';

import ResetPasswordConfirmation from './ResetPasswordConfirmation';

describe('<ResetPasswordConfirmation />', () => {
  it('renders the ResetPasswordConfirmation component correctly', () => {
    const wrapper = shallow(<ResetPasswordConfirmation />);
    expect(wrapper).toMatchSnapshot();
  });
});
