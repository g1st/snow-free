import React from 'react';

import { shallow } from 'enzyme';

import Backdrop from './Backdrop';

describe('<Backdrop />', () => {
  it('is hidden by default', () => {
    const wrapper = shallow(<Backdrop />);
    expect(wrapper.find('.Hidden')).toHaveLength(1);
    expect(wrapper.find('.Visible')).toHaveLength(0);
  });
  it('is visible when show prop is true', () => {
    const wrapper = shallow(<Backdrop show />);
    expect(wrapper.find('.Hidden')).toHaveLength(0);
    expect(wrapper.find('.Visible')).toHaveLength(1);
  });
});
