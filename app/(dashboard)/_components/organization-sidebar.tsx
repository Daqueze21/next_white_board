'use client';

import Link from 'next/link';
// import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { LayoutDashboard, Star } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useSearchParams } from 'next/navigation';

const font = Poppins({
  subsets: ['latin'],
  weight: ['600'],
});
export const OrganizationSidebar = () => {
  const searchParams = useSearchParams();
  const favorites = searchParams.get('favorite');

  return (
    <div className='hidden lg:flex flex-col w-[200px] space-y-6  pt-5 pl-5 pr-5'>
      {/* TODO: add app logo */}
      <Link href='/'>
        <div className='flex item-center gap-x-2'>
          {/* <Image alt='logo' /> */}
          <span className={cn('font-semibold text-2xl', font.className)}>
            White Board
          </span>
        </div>
      </Link>
      <div className='w-full space-y-1'>
        <Button
          asChild
          size='lg'
          variant={favorites ? 'ghost' : 'secondary'}
          className='w-full justify-start px-2 font-normal'>
          <Link href='/'>
            <LayoutDashboard className='h-4 w-4 mr-2' />
            Team boards
          </Link>
        </Button>
        <Button
          asChild
          size='lg'
          variant={favorites ? 'secondary' : 'ghost'}
          className='w-full justify-start px-2 font-normal'>
          <Link href={{ pathname: '/', query: { favorites: false } }}>
            <Star className='h-4 w-4 mr-2' />
            Favorite boards
          </Link>
        </Button>
      </div>
    </div>
  );
};
