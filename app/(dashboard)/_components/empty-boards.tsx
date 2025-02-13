'use client';

import { Button } from '@/components/ui/button';
import { api } from '@/convex/_generated/api';
import { useApiMutation } from '@/hooks/use-api-mutation';
import { useOrganization } from '@clerk/nextjs';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export const EmptyBoards = () => {
  const { organization } = useOrganization();
  const { mutate, pending } = useApiMutation(api.board.createBoard);
  const router = useRouter();

  const onClick = () => {
    if (!organization) return;
    mutate({
      organizationId: organization.id,
      title: 'Untitled',
    })
      .then((id) => {
        toast.success('Board created!');
        router.push(`/board/${id}`);
      })
      .catch(() => toast.error('Failed to create board, something went wrong!'));
  };

  return (
    <div className='h-full flex flex-col items-center justify-center'>
      <Image src='/whiteboard.svg' height={140} width={140} alt='white board' />
      <h2 className='mt-6 text-2xl font-semibold'>Create your first board</h2>
      <p className='mt-2 text-muted-foreground text-sm '>
        Start by creating a board for your organization
      </p>
      <div className='mt-6'>
        <Button disabled={pending} onClick={onClick} size='lg'>
          Create board
        </Button>
      </div>
    </div>
  );
};
