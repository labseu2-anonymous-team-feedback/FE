import React from 'react';
import { shallow, mount } from 'enzyme';

import Question from './Question';
import TextArea from '../common/TextArea';

describe('<Question />', () => {
  const props = {
    handleChangeQuestion: jest.fn(),
    removeQuestion: jest.fn(),
    question: jest.mock(),
    history: { push: jest.fn() },
  };
  it('renders the Question component correctly', () => {
    const wrapper = shallow(<Question />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call the mock onSubmit function', () => {
    const wrapper = mount(<Question {...props} />);
    expect(wrapper.find(TextArea).length).toBe(1);
  });

  it('should call the mock handleChangeQuestion function', () => {
    const wrapper = mount(<Question {...props} />);

    wrapper
      .find('.form-control .mb-4')
      .simulate('change', { preventDefault() {} });
    expect(props.handleChangeQuestion).toBeCalled();
  });

  it('should call the mock handleChangeQuestion function', () => {
    const wrapper = mount(<Question {...props} />);

    wrapper.find('#type').simulate('change', { preventDefault() {} });
    expect(props.handleChangeQuestion).toBeCalled();
  });
});
