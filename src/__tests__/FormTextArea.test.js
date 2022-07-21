// @ts-nocheck
/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormControl from 'components/FormControl';
import FormTextArea from 'components/FormTextArea';
import * as React from 'react';

const mockedOnInput = jest.fn(() => {});

function MockedFormInput({ isError, rows }) {
  return (
    <FormControl label="title" title="Isi Catatan">
      <FormTextArea
        label="title"
        onInput={mockedOnInput}
        isError={isError}
        rows={rows}
      />
    </FormControl>
  );
}

describe('FormTextArea element', () => {
  it('Should render form textarea component', () => {
    render(<MockedFormInput isError={false} />);
    const textareaElement = screen.getByRole('textbox', { name: 'Isi Catatan' });
    expect(textareaElement).toBeInTheDocument();
  });

  it('Should be able to type in textarea', () => {
    render(<MockedFormInput isError={false} />);
    const textareaElement = screen.getByRole('textbox', { name: 'Isi Catatan' });
    userEvent.type(textareaElement, 'Babel');
    expect(mockedOnInput).toHaveBeenCalled();
    expect(mockedOnInput).toBeCalledTimes(5);
  });

  it('Should update value when typing in textarea', () => {
    render(<MockedFormInput isError={false} />);
    const textareaElement = screen.getByRole('textbox', { name: 'Isi Catatan' });
    userEvent.type(textareaElement, 'Babel');
    expect(textareaElement.value).toBe('Babel');
  });

  it('Should render red border if isError is true', () => {
    render(<MockedFormInput isError />);
    const textareaElement = screen.getByRole('textbox', { name: 'Isi Catatan' });
    expect(textareaElement).toHaveClass('border-red-500');
  });

  it('Should render textarea with specified rows', () => {
    render(<MockedFormInput isError={false} rows={5} />);
    const textareaElement = screen.getByRole('textbox', { name: 'Isi Catatan' });
    expect(textareaElement).toHaveAttribute('rows', '5');
  });
});
