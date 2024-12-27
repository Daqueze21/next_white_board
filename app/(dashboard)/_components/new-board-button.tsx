'use client';

import { api } from '@/convex/_generated/api';
import { useApiMutation } from '@/hooks/use-api-mutation';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import { toast } from 'sonner';

interface NewBoardButtonProps {
  organizationId: string;
  disabled?: boolean;
}

export const NewBoardButton = ({
  organizationId,
  disabled,
}: NewBoardButtonProps) => {
  const { mutate, pending } = useApiMutation(api.board.createBoard);
  const onClick = () => {
    mutate({
      organizationId,
      title: 'Untitled',
    })
      .then((id) => {
        toast.success('new board created!');
        // TODO: Redirect to board|{id}
      })
      .catch(() =>
        toast.error('Failed to create board, something went wrong!')
      );
  };

  return (
    <button
      disabled={pending || disabled}
      onClick={onClick}
      className={cn(
        'flex flex-col items-center justify-center py-6 col-span-1 aspect-[100/127] rounded-lg bg-teal-500 hover:bg-teal-700',
        (pending || disabled) && 'opacity-75 hover:bg-teal-500 cursor-not-allowed'
      )}>
      <div />
      <Plus className='h-12 w-12 text-white' />
      <div className='text-sm text-white font-light'>New board</div>
    </button>
  );
};
