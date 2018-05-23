import React from 'react';
import renderer from 'react-test-renderer';

import Form from './Form.js';

describe('Form component renders the form correctly', () => {
  it('renders correctly', () => {
    const rendered = renderer.create(<Form />);
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
