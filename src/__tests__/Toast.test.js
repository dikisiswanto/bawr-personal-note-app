/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import Toast from 'components/Toast';
import * as React from 'react';

it('Should appear notification when show prop is true', () => {
  render(<Toast show message="Action successfully processed" />);
  const toast = screen.queryByText('Action successfully processed');
  expect(toast).toBeInTheDocument();
  expect(toast).toHaveClass('show');
});

it('Should disappear notification when show prop is false', () => {
  render(<Toast show={false} message="Action successfully processed" />);
  const toast = screen.queryByText('Action successfully processed');
  expect(toast).toBeInTheDocument();
  expect(toast).not.toHaveClass('show');
});
