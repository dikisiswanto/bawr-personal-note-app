import NoteItem from 'components/NoteItem';
import * as React from 'react';

export default function NoteList({
  notes, actionButtonText, onMarkNote, onDeleteNote,
}) {
  return (
    <div className="space-y-3">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          actionButtonText={actionButtonText}
          onMarkNote={onMarkNote}
          onDeleteNote={onDeleteNote}
        />
      ))}
      {!notes.length && <p className="text-sm text-gray-600">Tidak ada catatan</p>}
    </div>
  );
}
