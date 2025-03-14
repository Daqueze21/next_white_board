'use client';

import { useState } from 'react';

import { Info } from './info';
import { ParticipantsList } from './participants-list';
import { Toolbar } from './toolbar';
import { CanvasMode, CanvasState } from '@/types/canvas';
import { useCanRedo, useCanUndo, useHistory} from '@/liveblocks.config';

interface CanvasProps {
  boardId: string;
}

export const Canvas = ({ boardId }: CanvasProps) => {
  const [canvasState, setCanvasState] = useState<CanvasState>({mode:CanvasMode.None});
  const history = useHistory();
  const canRedo = useCanRedo();
  const canUndo = useCanUndo();

  return (
    <main className='h-full w-full relative touch-none bg-neutral-100'>
      <Info boardId={boardId} />
      <Toolbar
        canvasState={canvasState}
        setCanvasState={setCanvasState}
        canUndo={canUndo}
        canRedo={canRedo}
        undo={history.undo}
        redo={history.redo}
      />
      <ParticipantsList />
    </main>
  );
};
