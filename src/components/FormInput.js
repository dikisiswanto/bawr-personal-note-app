// @ts-nocheck
import clsx from 'clsx';
import * as React from 'react';

export default function FormInput({
  type, label, className, value, onInput, isError,
}) {
  return (
    <input
      type={type}
      id={label}
      className={clsx('h-10 rounded-md border bg-gray-200/50 px-3 focus:outline-none', className, {
        'border-red-500': isError,
        'border-gray-300/90 focus:border-primary': !isError,
      })}
      value={value}
      onInput={({ target }) => onInput(target.value)}
    />
  );
}
