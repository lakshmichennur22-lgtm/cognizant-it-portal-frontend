import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a welcome message', () => {
  render(<App />);
  const element = screen.getByText(/welcome/i);
  expect(element).toBeInTheDocument();
});
