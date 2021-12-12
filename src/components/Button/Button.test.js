import React from 'react';
import Button from './Button';
import { renderWithRedux } from '../../stores/renderWithRedux';

describe('Button component', () => {
  
  test('render Button component', () => {
    const {getByRole} = renderWithRedux(<Button />);
    expect(getByRole('button')).toBeInTheDocument();
  });
  
  test('should call onClick method', () => {
    const mockFn = jest.fn();
    const {getByRole} = renderWithRedux(<Button onClick={mockFn} />);
    expect(mockFn.mock.calls.length).toBe(0);
    getByRole('button').click();
    expect(mockFn.mock.calls.length).toBe(1);
  })
});
