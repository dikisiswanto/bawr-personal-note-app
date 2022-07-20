// @ts-nocheck
import * as React from 'react';

export default function FormInput({
  type, label, className, value, onInput, isError,
}) {
  return (
    <input
      type={type}
      id={label}
      className={`h-10 rounded-md border bg-gray-200/50 px-3 focus:outline-none ${
        className ?? ''
      } ${isError ? 'border-red-500' : 'border-gray-300/90 focus:border-primary'}`}
      value={value}
      onInput={({ target }) => onInput(target.value)}
    />
  );
}
