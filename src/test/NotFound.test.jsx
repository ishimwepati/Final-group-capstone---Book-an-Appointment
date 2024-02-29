// NotFound.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotFound from '../components/NotFound';

test('renders NotFound component', () => {
  render(<NotFound />);

  const headingElement = screen.getByText(/Not Found Element!/i);
  const paragraphElement = screen.getByText(/Upsss!/i);

  expect(headingElement).toBeInTheDocument();
  expect(paragraphElement).toBeInTheDocument();
});
