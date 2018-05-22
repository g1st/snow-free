import React from 'react';
import { shallow } from 'enzyme';

import Layout from './Layout';
import Footer from '../../components/Footer/Footer';

describe('<Layout />', () => {
  it('should render a <Footer/>', () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper.find(Footer)).toHaveLength(1);
  });

  it('renders children when passed in', () => {
    const wrapper = shallow(<Layout>
        <div className="unique" />
      </Layout>,);
    expect(wrapper.contains(<div className="unique" />)).toBe(true);
  });
});
