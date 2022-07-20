import * as React from 'react';

export default function FormControl({ label, title, children }) {
  return (
    <>
      <label htmlFor={label} className="text-sm text-gray-700/90">
        {title}
      </label>
      {children}
    </>
  );
}
