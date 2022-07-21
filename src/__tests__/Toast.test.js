/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import Toast from 'components/Toast';
import * as React from 'react';

describe('Toast element', () => {
  it('Should render toast correctly', () => {
    render(<Toast message="Catatan berhasil ditambahkan" show />);
    const toast = screen.getByText('Catatan berhasil ditambahkan');
    expect(toast).toBeInTheDocument();
  });

  it('Should appear notification when show prop is true', () => {
    render(<Toast show message="Catatan berhasil ditambahkan" />);
    const toast = screen.getByText('Catatan berhasil ditambahkan');
    expect(toast).toHaveClass('show');
  });

  it('Should disappear notification when show prop is false', () => {
    render(<Toast show={false} message="Catatan berhasil ditambahkan" />);
    const toast = screen.getByText('Catatan berhasil ditambahkan');
    expect(toast).not.toHaveClass('show');
  });
});
