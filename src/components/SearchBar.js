// @ts-nocheck
import * as React from 'react';

export default function SearchBar({ onSearch, setQuery, query }) {
  return (
    <form
      action="#"
      className="relative hidden px-5 lg:block"
      id="search-form"
      onSubmit={(e) => {
        e.preventDefault();
        onSearch();
      }}
    >
      <input
        type="text"
        className="h-10 w-full rounded-md bg-white px-3 text-sm shadow transition focus:shadow-lg focus:outline-none"
        name="query"
        autoComplete="off"
        placeholder="Cari catatan..."
        value={query}
        onInput={(e) => setQuery(e.target.value)}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-1/2 right-0 mr-5 h-8 w-8 -translate-y-1/2 transform pr-2 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </form>
  );
}
