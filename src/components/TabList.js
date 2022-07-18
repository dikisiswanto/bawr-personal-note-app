import TabListItem from './TabListItem';

export default function TabList({ menu, onMenuItemClick, activeTab }) {
  const { primary, secondary } = menu;

  return (
    <div className="py-3" role="tablist">
      <TabListItem
        menuItem={primary}
        type="primary"
        onMenuItemClick={onMenuItemClick}
        activeTab={activeTab}
        className="mb-3 bg-gray-300/30"
      />

      <h3 className="hidden py-3 px-5 font-semibold text-gray-500 lg:block">Daftar Catatan</h3>

      {secondary.map((menuItem) => (
        <TabListItem
          menuItem={menuItem}
          type="secondary"
          onMenuItemClick={onMenuItemClick}
          activeTab={activeTab}
          key={menuItem.id}
        />
      ))}
    </div>
  );
}
