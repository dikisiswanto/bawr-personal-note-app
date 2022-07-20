import SearchBar from 'components/SearchBar';
import SidebarHeader from 'components/SidebarHeader';
import TabList from 'components/TabList';
import * as React from 'react';

export default function Sidebar({
  menu,
  activeTab,
  onMenuItemClick,
  notes,
  query,
  onSearch,
  setQuery,
}) {
  return (
    <aside className="sticky top-0 w-auto space-y-3 py-3 lg:w-sidebar">
      <SidebarHeader />
      <SearchBar query={query} onSearch={onSearch} setQuery={setQuery} />
      <TabList menu={menu} activeTab={activeTab} onMenuItemClick={onMenuItemClick} notes={notes} />
    </aside>
  );
}
