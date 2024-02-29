// Message.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Message from '../components/Message';
import '@testing-library/jest-dom';

test('renders Message component with given message', () => {
  const messageText = 'Hello, this is a message!';
  render(<Message message={messageText} />);

  const messageElement = screen.getByText(messageText);

  expect(messageElement).toBeInTheDocument();
});
