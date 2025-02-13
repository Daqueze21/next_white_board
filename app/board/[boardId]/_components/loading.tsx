import { Loader } from 'lucide-react';
import { Info } from './info';
import { ParticipantsList } from './participantsList';
import { Toolbar } from './toolbar';

export const Loading = () => {
  return (
    <main className='h-full w-full relative flex justify-center items-center touch-none bg-neutral-100'>
        <Loader className='h-6 w-6 text-muted-foreground animate-spin' />
        <Info.Skeleton />
        <ParticipantsList.Skeleton />
        <Toolbar.Skeleton />
    </main>
  );
};
