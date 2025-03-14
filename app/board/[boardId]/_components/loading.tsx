import { Loader } from 'lucide-react';
import { ParticipantsListSkeleton } from './participants-list';
import { ToolbarSkeleton } from './toolbar';
import { InfoSkeleton } from './info';

export const Loading = () => {
  return (
    <main className='h-full w-full relative flex justify-center items-center touch-none bg-neutral-100'>
      <Loader className='h-6 w-6 text-muted-foreground animate-spin' />
      <InfoSkeleton />
      <ParticipantsListSkeleton />
      <ToolbarSkeleton />
    </main>
  );
};
