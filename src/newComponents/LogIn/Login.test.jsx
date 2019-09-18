import React from 'react';
import { shallow } from 'enzyme';

import { Signin } from './Signin';

describe('<Signin />', () => {
  let wrapper;

  const props = {
    location: { search: jest.mock() },
    client: { mutate: jest.fn(), query: jest.fn() },
    history: { push: jest.fn() },
  };

  beforeEach(() => {
    wrapper = shallow(<Signin {...props} />);
  });

  it('renders the Signin component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
