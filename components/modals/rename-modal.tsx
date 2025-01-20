'use client';

import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { useRenameModal } from '@/store/use-rename-modal';
import { FormEventHandler, useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useApiMutation } from '@/hooks/use-api-mutation';
import { api } from '@/convex/_generated/api';
import { toast } from 'sonner';

export const RenameModal = () => {
  // ! Fix the issues with schadcn Ui dialog component
  const { mutate, pending } = useApiMutation(api.board.updateBoard);

  const { isOpen, onClose, initialValues } = useRenameModal();
  const [title, setTitle] = useState<string>(initialValues.title);

  useEffect(() => {
    setTitle(initialValues.title);
  }, [initialValues.title]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    mutate({
      id: initialValues.id,
      title,
    })
      .then(() => {
        toast('board renamed');
        onClose();
      })
      .catch(() => {
        toast.error('failed to rename board');
      });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='max-h-[85dvh] overflow-y-auto'>
        <DialogHeader>
          <DialogTitle>Edit board title</DialogTitle>
        </DialogHeader>
        <DialogDescription>Enter new title for this board</DialogDescription>
        <form onSubmit={onSubmit} className='space-y-4'>
          <Input
            disabled={pending}
            onChange={onChangeHandler}
            value={title}
            maxLength={50}
            placeholder='Board title'
            required
          />
          <DialogFooter>
            <DialogClose asChild>
              <Button type='button' variant='outline'>
                Close
              </Button>
            </DialogClose>
            <Button disabled={pending} type='submit'>
              Confirm
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
