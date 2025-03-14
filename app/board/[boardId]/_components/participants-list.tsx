'use client';

import { Skeleton } from '@/components/ui/skeleton';

export const ParticipantsList = () => {
  return (
    <div className='absolute top-2 right-2 h-12 flex items-center p-3 rounded-md shadow-md bg-white'>
      Users List
    </div>
  );
};

export const ParticipantsListSkeleton = () => {
  return (
    <div className='absolute top-2 right-2 h-12 w-[150px] flex items-center p-3 rounded-md shadow-md bg-white'>
      <Skeleton className='h-full w-full bg-muted-400' />
    </div>
  );
};
