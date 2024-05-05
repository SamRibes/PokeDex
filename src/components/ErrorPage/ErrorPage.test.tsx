import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorPage from './ErrorPage';

// we'll put some stuff in here later

test('Renders the Error Page', () => {
  render(<ErrorPage />);
  const linkElement = screen.getByText(/Error Page/i);
  expect(linkElement).toBeInTheDocument();
});
