// @ts-nocheck
import clsx from 'clsx';
import * as React from 'react';

export default function FormTextArea({
  label, className, value, onInput, isError, rows,
}) {
  return (
    <textarea
      id={label}
      className={clsx('rounded-md border bg-gray-200/50 px-3 py-2 focus:outline-none', className, {
        'border-red-500': isError,
        'border-gray-300/90 focus:border-primary': !isError,
      })}
      value={value}
      onInput={({ target }) => onInput(target.value)}
      rows={rows}
    />
  );
}
