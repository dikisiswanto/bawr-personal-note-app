import NoteList from 'components/NoteList';
import * as React from 'react';

export default function ActiveNoteContainer({
  notes, activeTabContent, onMarkNote, onDeleteNote,
}) {
  return (
    <div
      className="space-y-5"
      aria-hidden={activeTabContent !== 'active-notes'}
      id="active-notes"
      aria-labelledby="tab-active-notes"
      role="tabpanel"
      tabIndex={0}
    >
      <h2 className="text-xl font-bold tracking-wide text-primary">Catatan Aktif</h2>
      <NoteList
        notes={notes}
        actionButtonText="Arsipkan"
        onMarkNote={onMarkNote}
        onDeleteNote={onDeleteNote}
      />
    </div>
  );
}
