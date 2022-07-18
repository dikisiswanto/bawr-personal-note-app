import NoteForm from './NoteForm';

export default function MainContent({
  activeTabContent, setNotes, notes, setNotification,
}) {
  return (
    <main className="min-h-screen w-full max-w-full bg-white px-4 py-8 lg:w-content lg:px-6">
      <NoteForm
        activeTabContent={activeTabContent}
        setNotes={setNotes}
        notes={notes}
        setNotification={setNotification}
      />
    </main>
  );
}
