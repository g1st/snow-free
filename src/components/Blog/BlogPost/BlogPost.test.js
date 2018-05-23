import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import BlogPost from './BlogPost';

describe('BlogPost component', () => {
  let props;
  let wrapper;
  beforeEach(() => {
    props = { img: 'image', author: 'John' };
    wrapper = shallow(<BlogPost {...props} />);
  });

  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should display author's name", () => {
    expect(wrapper.find('.CardTag').text()).toBe('John');
  });

  it('should display image', () => {
    expect(
      wrapper
        .find('.CardImage')
        .childAt(0)
        .props().src
    ).toBe('image');
  });
});
