import { render, screen } from '@testing-library/react';
import App from './App';

/* test with .toThrow() */
test('throw error', () => {
  expect(() => getError()).toThrow();
  expect(() => getError()).toThrow(Error);
});

/* test with .toBeInTheDocument */
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/change theme/i);
  expect(linkElement).toBeInTheDocument();
});
