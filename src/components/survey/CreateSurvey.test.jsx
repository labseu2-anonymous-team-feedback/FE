import React from 'react';
import { shallow } from 'enzyme';

import CreateSurvey from './CreateSurvey';

describe('<CreateSurvey />', () => {
  it('renders the CreateSurvey component correctly', () => {
    const wrapper = shallow(<CreateSurvey />);
    expect(wrapper).toMatchSnapshot();
  });
});
