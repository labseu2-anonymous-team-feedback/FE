import React from 'react';
import { shallow } from 'enzyme';
import { RatingWrapper } from './styles';
import Rating from './Rating';

describe('<Rating />', () => {
  const props = {
    value: 2,
    selectHandler: jest.fn(),
  };
  // eslint-disable-next-line react/jsx-props-no-spreading
  const wrapper = shallow(<Rating {...props} />);
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
    const children = wrapper.find(RatingWrapper).children();
    expect(children).toHaveLength(2);
    expect(children.find('span')).toHaveLength(2);
  });
});
