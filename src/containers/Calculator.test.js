import React from 'react';
import Calculator from './Calculator';
import { renderWithRedux } from '../stores/renderWithRedux';

describe('Calculator component', () => {
  test('render Calculator component', () => {
    const { container } = renderWithRedux(<Calculator />);
    expect(container.firstChild).toHaveClass('container');
  });
});
