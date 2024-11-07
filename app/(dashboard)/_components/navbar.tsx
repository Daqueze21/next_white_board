'use client';

import { UserButton } from "@clerk/nextjs";

export const Navbar = () => {
  return (
    <div className='flex items-center gap-x-4  p-5 bg-orange-400'>
      <div className="hidden lg:flex lg:flex-1 bg-red-800">
        search-bar
        {/* TODO:Search bar */}
      </div>
      <UserButton />
    </div>
  );
};