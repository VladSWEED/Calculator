import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import Digits from '../../components/Digits/Digits.jsx';
import { renderWithRedux } from '../../stores/renderWithRedux';
import { digit, dot, equal } from '../../stores/actions/actions.js';



describe('Digits component', () => {
  const btnClick = index => {
    const button = screen.getByRole('button', { name: index });
    userEvent.click(button);
  }
  const digits = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  beforeEach(() => renderWithRedux(<Digits />))

  test('render Digits component', () => {
    expect(screen.getByTestId('digits')).toHaveClass('digits');
    const fn = (el) => expect(screen.getByText(el)).toBeInTheDocument();
    digits.forEach((el) => fn(el));
    expect(screen.getByText('.')).toBeInTheDocument()
    expect(screen.getByText('=')).toBeInTheDocument()
  });

  test('should return correct object after clicking on digits', () => {
    const fn = (index) => {
    btnClick(index);
    expect(digit(index, 0)).toEqual({ type: 'DIGIT', result: index });
  };
    digits.forEach((el) => fn(el));
  });

  test('should return correct object after clicking on dot', () => {
    btnClick('.')
    expect(dot()).toEqual({type: 'DOT'});
  })

  test('should return correct object after clicking on equal', () => {
    btnClick('=')
    expect(equal('25+6/2')).toEqual({type: 'EQUAL', result: 28});
  })
});
