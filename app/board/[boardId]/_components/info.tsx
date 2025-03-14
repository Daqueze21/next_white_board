'use client';

import { ActionsDropdownMenu } from '@/components/actions-dropdown-menu';
import { Hint } from '@/components/hint';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import { cn } from '@/lib/utils';
import { useRenameModal } from '@/store/use-rename-modal';
import { useQuery } from 'convex/react';
import { Menu } from 'lucide-react';
import { Poppins } from 'next/font/google';
import Link from 'next/link';

interface InfoProps {
  boardId: string;
}

const font = Poppins({
  subsets: ['latin'],
  weight: ['600'],
});

export const Info = ({ boardId }: InfoProps) => {
  const { onOpen } = useRenameModal();
  const boardData = useQuery(api.board.getBoard, {
    id: boardId as Id<'boards'>,
  });

  if (!boardData) return <InfoSkeleton />;

  const renameBoardHandler = () => {
    onOpen(boardData._id, boardData.title);
  };

  return (
    <div className='absolute top-2 left-2 h-12 flex items-center px-2 rounded-md shadow-md bg-white'>
      <Hint label='Go to board list' side='bottom' sideOffset={10}>
        <Button variant='board' className='px-2' asChild>
          <Link href='/'>
            <span
              className={cn(
                'text-xl font-semibold text-black',
                font.className
              )}>
              Board
            </span>
          </Link>
        </Button>
      </Hint>
      <Separator orientation='vertical' className='mx-2' />
      <Hint label='Edit board title' side='bottom' sideOffset={10}>
        <Button
          onClick={renameBoardHandler}
          className='px-2 font-normal text-base'
          variant='board'>
          {boardData.title}
        </Button>
      </Hint>
      <Separator orientation='vertical' className='mx-2' />
      <ActionsDropdownMenu
        side='bottom'
        id={boardData._id}
        title={boardData.title}
        sideOffset={10}>
        <div>
          <Hint label='Board action menu' sideOffset={10}>
            <Button size='icon' variant='board'>
              <Menu />
            </Button>
          </Hint>
        </div>
      </ActionsDropdownMenu>
    </div>
  );
};

export const InfoSkeleton = () => {
  return (
    <div className='absolute top-2 left-2 h-12 w-[300px] flex items-center px-2 rounded-md shadow-md bg-white'>
      <Skeleton className='h-full w-full bg-muted-400' />
    </div>
  );
};
