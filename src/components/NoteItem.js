import * as React from 'react';
import { showFormattedDate } from 'utils';

export default function NoteItem({
  note, actionButtonText, onMarkNote, onDeleteNote,
}) {
  return (
    <article className="gap-x-3 space-y-1 rounded border-b border-gray-300 bg-gray-200/40 px-3 py-4 lg:px-6">
      <h2 className="font-semibold text-gray-600/90 lg:text-lg">{note.title}</h2>
      <span className="block text-xs text-gray-400">{showFormattedDate(note.createdAt)}</span>
      <p>{note.body}</p>
      <div className="flex space-x-3 pt-3">
        <button
          type="button"
          className="rounded bg-primary/20 py-2 px-3 text-blue-700"
          onClick={() => onMarkNote(note)}
        >
          {actionButtonText}
        </button>
        <button
          type="button"
          className="rounded bg-red-400/20 py-2 px-3 text-red-700"
          onClick={() => onDeleteNote(note)}
        >
          Hapus
        </button>
      </div>
    </article>
  );
}
