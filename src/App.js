import { useEffect, useState } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import Toast from './components/Toast';
import MENU from './data/menu';

function App() {
  const [activeTab, setActiveTab] = useState('form');
  const [notes, setNotes] = useState([]);
  const [notification, setNotification] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const setToast = (message) => {
    setShowNotification(true);
    setNotification(message);
  };

  useEffect(() => {
    const toast = showNotification && setTimeout(() => setShowNotification(false), 3000);
    return () => clearTimeout(toast);
  }, [showNotification, notification]);

  return (
    <section className="mx-auto flex h-full min-h-screen max-w-[1120px] flex-col bg-slate-100 font-main text-gray-600 shadow-lg">
      <Header />
      <div className="flex flex-1 items-start bg-gray-200">
        <Sidebar menu={MENU} onMenuItemClick={handleTabChange} activeTab={activeTab} />
        <MainContent
          activeTabContent={activeTab}
          setNotes={setNotes}
          notes={notes}
          setNotification={setToast}
        />
      </div>
      <Toast message={notification} show={showNotification} />
    </section>
  );
}

export default App;
