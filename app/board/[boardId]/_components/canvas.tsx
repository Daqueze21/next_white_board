'use client';

import { Info } from './info';
import { ParticipantsList } from './participantsList';
import { Toolbar } from './toolbar';

interface CanvasProps {
  boardId: string;
}

export const Canvas = ({ boardId }: CanvasProps) => {
  return (
    <main className='h-full w-full relative touch-none bg-neutral-100'>
      <Info boardId={boardId} />
      <Toolbar />
      <ParticipantsList />
    </main>
  );
};
