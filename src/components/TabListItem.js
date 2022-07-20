import clsx from 'clsx';
import * as React from 'react';

export default function TabListItem({
  menuItem,
  type,
  className,
  onMenuItemClick,
  activeTab,
  dataLength,
}) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onMenuItemClick(menuItem.id);
    }
  };
  const isTabActive = menuItem.id === activeTab;

  return (
    <a
      className={clsx('flex justify-between gap-2 px-3 py-3 transition', className, {
        'hover:bg-gray-100/30': !isTabActive && type !== 'primary',
        'font-semibold': type === 'primary',
        'lg:px-5 lg:pl-8': type !== 'primary',
      })}
      href="#!"
      role="tab"
      aria-selected={isTabActive}
      aria-controls={menuItem.id}
      id={`tab-${menuItem.id}`}
      onClick={() => onMenuItemClick(menuItem.id)}
      onKeyDownCapture={(e) => handleKeyDown(e)}
    >
      <div className="inline-flex gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={menuItem.icon} />
        </svg>
        <span className="hidden lg:block">{menuItem.title}</span>
      </div>
      {type === 'secondary' && (
        <span className="count-label hidden lg:inline-block">{!!dataLength && dataLength}</span>
      )}
    </a>
  );
}
