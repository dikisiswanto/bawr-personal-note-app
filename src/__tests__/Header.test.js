/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import Header from 'components/Header';
import * as React from 'react';

it('Should render header with heading role and correct text', () => {
  render(<Header />);
  const header = screen.getByRole('heading', { name: 'Catatanku' });
  expect(header).toBeInTheDocument();
});
