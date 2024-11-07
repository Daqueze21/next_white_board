import React from 'react';
import { NewButton } from './new-button';
import { OrganizationsList } from './organizations-list';

export const Sidebar = () => {
  return (
    <aside className='fixed left-0 z-[1] w-[60px] h-full flex flex-col gap-y-4 p-3 bg-lime-600 text-white'>
      <OrganizationsList />
      <NewButton/>
    </aside>
  )
}
