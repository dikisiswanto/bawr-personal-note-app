import clsx from 'clsx';
import * as React from 'react';

export default function Toast({ message, show }) {
  return <div className={clsx('toast success', { show })}>{message}</div>;
}
