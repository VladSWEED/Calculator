import { screen } from '@testing-library/react';
import Display from '../../components/Display/Display.jsx';
import { renderWithRedux } from '../../stores/renderWithRedux';

describe('Display component', () => {
  test('render Display component', () => {
    renderWithRedux(<Display />);
    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getByText('0')).toHaveClass('display');
  });
});
