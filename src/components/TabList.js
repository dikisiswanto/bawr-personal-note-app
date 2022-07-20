import TabListItem from 'components/TabListItem';
import * as React from 'react';

export default function TabList({
  menu, onMenuItemClick, activeTab, notes,
}) {
  const { primary, secondary } = menu;

  return (
    <div className="py-3" role="tablist">
      <TabListItem
        menuItem={primary}
        type="primary"
        onMenuItemClick={onMenuItemClick}
        activeTab={activeTab}
        className="mb-3 bg-gray-300/30"
        dataLength={0}
      />

      <h3 className="hidden py-3 px-5 font-semibold text-gray-500 lg:block">Daftar Catatan</h3>

      {secondary.map((menuItem) => (
        <TabListItem
          menuItem={menuItem}
          type="secondary"
          onMenuItemClick={onMenuItemClick}
          activeTab={activeTab}
          dataLength={
            notes.filter((note) => note.archived === (menuItem.id === 'archived-notes')).length
          }
          key={menuItem.id}
          className=""
        />
      ))}
    </div>
  );
}
