import SearchBar from './SearchBar';
import SidebarHeader from './SidebarHeader';
import TabList from './TabList';

export default function Sidebar({ menu, activeTab, onMenuItemClick }) {
  return (
    <aside className="sticky top-0 w-auto space-y-3 py-3 lg:w-sidebar">
      <SidebarHeader />
      <SearchBar />
      <TabList menu={menu} activeTab={activeTab} onMenuItemClick={onMenuItemClick} />
    </aside>
  );
}
