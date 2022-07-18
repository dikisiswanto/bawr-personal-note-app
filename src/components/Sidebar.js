import SearchBar from './SearchBar';
import SidebarHeader from './SidebarHeader';
import TabList from './TabList';

export default function Sidebar({
  menu, activeTab, onMenuItemClick, notes, query, onSearch, setQuery,
}) {
  return (
    <aside className="sticky top-0 w-auto space-y-3 py-3 lg:w-sidebar">
      <SidebarHeader />
      <SearchBar query={query} onSearch={onSearch} setQuery={setQuery} />
      <TabList menu={menu} activeTab={activeTab} onMenuItemClick={onMenuItemClick} notes={notes} />
    </aside>
  );
}
