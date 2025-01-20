'use client';

import { toast } from 'sonner';
import { DropdownMenuContentProps } from '@radix-ui/react-dropdown-menu';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Link2, Pencil, Trash2 } from 'lucide-react';
import { useApiMutation } from '@/hooks/use-api-mutation';
import { api } from '@/convex/_generated/api';
import { ConfirmModal } from './confirm-modal';
import { Button } from '@/components/ui/button';
import { useRenameModal } from '@/store/use-rename-modal';

interface ActionsProps {
  children: React.ReactNode;
  side?: DropdownMenuContentProps['side'];
  sideOffset?: DropdownMenuContentProps['sideOffset'];
  id: string;
  title: string;
}

export const Actions = ({
  children,
  side,
  sideOffset,
  id,
  title,
}: ActionsProps) => {
  const { mutate, pending } = useApiMutation(api.board.removeBoard);
  const { onOpen } = useRenameModal();

  const onCopyLink = () => {
    navigator.clipboard
      .writeText(`${window.location.origin}/board/${id}`)
      .then(() => toast.success('Link is copied'))
      .catch(() => toast.error('Failed to copy link'));
  };

  const onDeleteBoard = () => {
    mutate({ id })
      .then(() => toast.success('Board deleted'))
      .catch(() => toast.error('Failed to delete board'));
  };

  const onRenameBoard = () => {
    onOpen(id, title);
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        onClick={(e) => e.stopPropagation()}
        side={side}
        sideOffset={sideOffset}
        className='w-60'>
        <DropdownMenuItem className='p-3 cursor-pointer' onClick={onCopyLink}>
          <Link2 className='h-4 w-4 mr-2' />
          Copy board link
        </DropdownMenuItem>
        <DropdownMenuItem
          className='p-3 cursor-pointer'
          onClick={onRenameBoard}>
          <Pencil className='h-4 w-4 mr-2' />
          Rename
        </DropdownMenuItem>
        <ConfirmModal
          header='Delete board?'
          description='This will delete the board'
          onConfirm={onDeleteBoard}
          disabled={pending}>
          <Button
            variant='ghost'
            className='w-full justify-start p-3 cursor-pointer text-sm font-normal'>
            <Trash2 className='h-4 w-4 mr-2' />
            Remove board
          </Button>
        </ConfirmModal>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
