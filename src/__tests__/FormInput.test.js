// @ts-nocheck
/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormControl from 'components/FormControl';
import FormInput from 'components/FormInput';
import * as React from 'react';

const mockedOnInput = jest.fn(() => {});

function MockedFormInput({ isError }) {
  return (
    <FormControl label="title" title="Judul">
      <FormInput
        type="text"
        label="title"
        className=""
        onInput={mockedOnInput}
        isError={isError}
      />
    </FormControl>
  );
}

describe('FormInput element', () => {
  it('Should render form input component', async () => {
    render(<MockedFormInput isError={false} />);
    const inputElement = screen.getByRole('textbox', { name: 'Judul' });
    expect(inputElement).toBeInTheDocument();
  });

  it('Should be able to type in input', async () => {
    render(<MockedFormInput isError={false} />);
    const inputElement = screen.getByRole('textbox', { name: 'Judul' });
    userEvent.type(inputElement, 'Babel');
    expect(mockedOnInput).toHaveBeenCalled();
    expect(mockedOnInput).toBeCalledTimes(5);
  });

  it('Should update value when typing in input', async () => {
    render(<MockedFormInput isError={false} value="" />);
    const inputElement = screen.getByRole('textbox', { name: 'Judul' });
    userEvent.type(inputElement, 'Babel');
    expect(inputElement.value).toBe('Babel');
  });

  it('Should render red border if isError is true', async () => {
    render(<MockedFormInput isError />);
    const inputElement = screen.getByRole('textbox', { name: 'Judul' });
    expect(inputElement).toHaveClass('border-red-500');
  });
});
