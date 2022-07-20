import NoteList from 'components/NoteList';
import * as React from 'react';

export default function ArchivedNoteContainer({
  notes,
  activeTabContent,
  onMarkNote,
  onDeleteNote,
}) {
  return (
    <div
      className="space-y-5"
      aria-hidden={activeTabContent !== 'archived-notes'}
      id="archived-notes"
      aria-labelledby="tab-archive-notes"
      role="tabpanel"
      tabIndex={0}
    >
      <h2 className="text-xl font-bold tracking-wide text-primary">Diarsipkan</h2>
      <NoteList
        notes={notes}
        actionButtonText="Pindahkan dari Arsip"
        onMarkNote={onMarkNote}
        onDeleteNote={onDeleteNote}
      />
    </div>
  );
}
