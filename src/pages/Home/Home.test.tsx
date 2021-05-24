import React from 'react';
import { render, screen } from '@testing-library/react';
import { Home } from './index';

test('renders texts and button', () => {
  render(<Home />);
  const textElement = screen.getByText(/Liebe soll dich begleiten/i);
  const button = screen.getByRole('button');
  expect(textElement).toBeInTheDocument();
  expect(button).toBeEnabled();
});
