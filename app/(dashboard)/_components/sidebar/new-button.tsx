'use client';

import { Plus } from 'lucide-react';
import { CreateOrganization } from '@clerk/nextjs';

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Hint } from '@/components/hint';

export const NewButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className='aspect-square'>
          <Hint
            label='Create organization'
            side='right'
            align='start'
            sideOffset={16}>
            <button className='h-full w-full flex items-center justify-center opacity-60 bg-white/25 rounded-md hover:opacity-100 transition'>
              <Plus className='text-white'></Plus>
            </button>
          </Hint>
        </div>
      </DialogTrigger>
      <DialogContent className='max-w-[480px] p-0 m-0 bg-transparent border-none'>
        <CreateOrganization />
      </DialogContent>
    </Dialog>
  );
};
