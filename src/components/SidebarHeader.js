import * as React from 'react';

export default function SidebarHeader() {
  return (
    <h2 className="flex items-center gap-4 py-3 px-2 font-bold lg:px-5">
      <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-300 lg:h-12 lg:w-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      </span>
      <span className="hidden lg:block">Aplikasi Catatanku</span>
    </h2>
  );
}
