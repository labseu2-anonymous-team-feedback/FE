import React from 'react';
import { shallow } from 'enzyme';
import Question from './Question';

describe('<Question />', () => {
  it('renders the Question component correctly', () => {
    const wrapper = shallow(<Question />);
    expect(wrapper).toMatchSnapshot();
  });
});
