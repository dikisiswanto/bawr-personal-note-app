import ConfirmDialog from 'components/ConfirmDialog';
import Header from 'components/Header';
import MainContent from 'components/MainContent';
import Sidebar from 'components/Sidebar';
import Toast from 'components/Toast';
import MENU from 'data/menu';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { getInitialData } from 'utils';

function App() {
  const [activeTab, setActiveTab] = useState('form');
  const [notes, setNotes] = useState(getInitialData());
  const [notification, setNotification] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [noteToDelete, setNoteToDelete] = useState(null);
  const [query, setQuery] = useState('');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const setToast = (message) => {
    setShowNotification(true);
    setNotification(message);
  };

  const markNote = (note) => {
    const newNotes = [...notes];
    const noteIndex = newNotes.findIndex((n) => n.id === note.id);
    newNotes[noteIndex] = { ...note, archived: !note.archived };
    setNotes(newNotes);
    setNotification(
      !note.archived ? 'Catatan berhasil diarsipkan' : 'Catatan berhasil dipindahkan',
    );
    setShowNotification(true);
  };

  const deleteNote = () => {
    const newNotes = [...notes];
    const noteIndex = newNotes.findIndex((n) => n.id === noteToDelete.id);
    newNotes.splice(noteIndex, 1);
    setNotes(newNotes);
    setShowDialog(false);
    setNotification('Catatan berhasil dihapus');
    setShowNotification(true);
  };

  const handleConfirmDialog = (note) => {
    setShowDialog(true);
    setNoteToDelete(note);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
    setNoteToDelete(null);
  };

  const handleSearch = () => {
    setActiveTab('search-result');
  };

  useEffect(() => {
    const toast = showNotification && setTimeout(() => setShowNotification(false), 3000);
    return () => clearTimeout(toast);
  }, [showNotification, notification]);

  return (
    <section className="mx-auto flex h-full min-h-screen max-w-[1120px] flex-col bg-slate-100 font-main text-gray-600 shadow-lg">
      <Header />
      <div className="flex flex-1 items-start bg-gray-200">
        <Sidebar
          menu={MENU}
          onMenuItemClick={handleTabChange}
          activeTab={activeTab}
          notes={notes}
          query={query}
          onSearch={handleSearch}
          setQuery={setQuery}
        />
        <MainContent
          activeTabContent={activeTab}
          setNotes={setNotes}
          notes={notes}
          setNotification={setToast}
          onMarkNote={markNote}
          onDeleteNote={handleConfirmDialog}
          query={query}
        />
      </div>
      {showDialog && (
        <ConfirmDialog
          title="Hapus Data"
          message="Apakah Anda yakin ingin menghapus data ini?"
          onConfirm={deleteNote}
          onCancel={handleCloseDialog}
        />
      )}
      <Toast message={notification} show={showNotification} />
    </section>
  );
}

export default App;
