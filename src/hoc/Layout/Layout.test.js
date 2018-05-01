import React from 'react';
import { shallow } from 'enzyme';

import Layout from './Layout';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

describe('<Layout />', () => {
  it('should render a <Toolbar/>', () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper.find(Toolbar)).toHaveLength(1);
  });
});
