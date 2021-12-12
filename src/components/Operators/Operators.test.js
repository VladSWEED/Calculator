import React from 'react';
import { screen } from '@testing-library/react';
import Operators from '../../components/Operators/Operators';
import { renderWithRedux } from '../../stores/renderWithRedux';
import { clear, operator } from '../../stores/actions/actions';
import userEvent from '@testing-library/user-event';


describe('Operator component', () => {
  const operators = ['/', '*', '+', '-'];
  beforeEach(() => renderWithRedux(<Operators />));
  const btnClick = index => {
    const button = screen.getByRole('button', { name: index });
    userEvent.click(button);
  }
  test('render Operator component', () => {
    expect(screen.getByTestId('operators')).toHaveClass('operators');
    operators.forEach((el) => expect(screen.getByText(el)).toBeInTheDocument());
  });

  test('should return correct object with operator equal 0', () => {
    operators.forEach((element) => {
      btnClick(element);
      expect(operator(element)).toEqual({ type: 'OPERATOR', operator: 0 });
    });
  });

  test('should return correct object with current operator', () => {
    operators.forEach((element) => {
      btnClick(element);
      expect(operator(element, '55')).toEqual({ type: 'OPERATOR', operator: element });
    });
  });

  test('should return correct object after clicking on CE', () => {
      btnClick('CE');
      expect(clear('CE')).toEqual({ type: 'CLEAR', value: 0 });
  });
});
