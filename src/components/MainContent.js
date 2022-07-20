import ActiveNoteContainer from 'components/ActiveNoteContainer';
import ArchivedNoteContainer from 'components/ArchivedNoteContainer';
import NoteForm from 'components/NoteForm';
import SearchResultContainer from 'components/SearchResultContainer';
import * as React from 'react';

export default function MainContent({
  activeTabContent,
  notes,
  onMarkNote,
  onDeleteNote,
  query,
  setNotification,
  setNotes,
}) {
  return (
    <main className="min-h-screen w-full max-w-full bg-white px-4 py-8 lg:w-content lg:px-6">
      <NoteForm
        activeTabContent={activeTabContent}
        setNotes={setNotes}
        notes={notes}
        setNotification={setNotification}
      />
      <ActiveNoteContainer
        notes={notes.filter((note) => note.archived === false)}
        activeTabContent={activeTabContent}
        onMarkNote={onMarkNote}
        onDeleteNote={onDeleteNote}
      />
      <ArchivedNoteContainer
        notes={notes.filter((note) => note.archived === true)}
        activeTabContent={activeTabContent}
        onMarkNote={onMarkNote}
        onDeleteNote={onDeleteNote}
      />
      <SearchResultContainer
        notes={notes.filter(
          (note) => note.title.toLowerCase().includes(query.toLowerCase())
            || note.body.toLowerCase().includes(query.toLowerCase()),
        )}
        activeTabContent={activeTabContent}
        onMarkNote={onMarkNote}
        onDeleteNote={onDeleteNote}
        query={query}
      />
    </main>
  );
}
