import NoteList from 'components/NoteList';
import * as React from 'react';

export default function SearchResultContainer({
  notes,
  activeTabContent,
  query,
  onMarkNote,
  onDeleteNote,
}) {
  return (
    <div
      className="space-y-5"
      aria-hidden={activeTabContent !== 'search-result'}
      id="search-results"
      aria-labelledby="tab-search-result"
      role="tabpanel"
      tabIndex={0}
    >
      <h2>
        Menampilkan catatan dengan kata kunci
        {' '}
        <strong>{query}</strong>
      </h2>
      <h2 className="font-bold tracking-wide text-primary">Catatan Aktif</h2>
      <NoteList
        notes={notes.filter((note) => note.archived === false)}
        actionButtonText="Arsipkan"
        onMarkNote={onMarkNote}
        onDeleteNote={onDeleteNote}
      />
      <h2 className="font-bold tracking-wide text-primary">Diarsipkan</h2>
      <NoteList
        notes={notes.filter((note) => note.archived === true)}
        actionButtonText="Pindahkan dari Arsip"
        onMarkNote={onMarkNote}
        onDeleteNote={onDeleteNote}
      />
    </div>
  );
}
