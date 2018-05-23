import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Form from './Form.js';

describe('Form component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Form />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
