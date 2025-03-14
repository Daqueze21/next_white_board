'use client';

import Link from 'next/link';
import Image from 'next/image';
import { toast } from 'sonner';

import { useAuth } from '@clerk/nextjs';
import { Skeleton } from '@/components/ui/skeleton';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {ActionsDropdownMenu } from '@/components/actions-dropdown-menu';
import { MoreHorizontal } from 'lucide-react';
import { useApiMutation } from '@/hooks/use-api-mutation';
import { api } from '@/convex/_generated/api';

import { Overlay } from './overlay';
import { CardFooter } from './cardFooter';

interface BoardCardProps {
  id: string;
  title: string;
  imageUrl: string;
  authorId: string;
  authorName: string;
  createdAt: number;
  organizationId: string;
  isFavorite: boolean;
}

dayjs.extend(relativeTime);

export const BoardCard = ({
  id,
  title,
  imageUrl,
  authorId,
  authorName,
  createdAt,
  organizationId,
  isFavorite,
}: BoardCardProps) => {
  const { userId } = useAuth();
  const authorLabel = userId === authorId ? 'You' : authorId;
  const createdAtLabel = dayjs(createdAt).fromNow();

  const { mutate: onFavorite, pending: pendingFavorite } = useApiMutation(
    api.board.favorite
  );

  const { mutate: onUnfavorite, pending: pendingUnfavorite } = useApiMutation(
    api.board.unfavorite
  );

  const toggleFavorite = () => {
    if (isFavorite) {
      onUnfavorite({ id }).catch(() => toast.error('Failed to unfavorite'));
      toast.success('Board removed from favorite');
    } else {
      onFavorite({ id, organizationId }).catch(() =>
        toast.error('Failed to unfavorite')
      );
      toast.success('Board added to favorite');
    }
  };

  return (
    <Link href={`/board/${id}`}>
      <div className='flex flex-col justify-between group aspect-[100/127] overflow-hidden border rounded-lg'>
        <div className='relative flex-1 bg-amber-50'>
          <Image src={imageUrl} alt={title} className='object-fit' fill />
          <Overlay />

          <ActionsDropdownMenu side='right' id={id} title={title}>
            <button className='absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-2 outline-none'>
              <MoreHorizontal className='text-white opacity-75 hover:opacity-100 transition-opacity' />
            </button>
          </ActionsDropdownMenu>
        </div>
        <CardFooter
          title={title}
          authorLabel={authorLabel}
          createdAtLabel={createdAtLabel}
          onClick={toggleFavorite}
          disabled={pendingFavorite || pendingUnfavorite}
          isFavorite={isFavorite}
        />
      </div>
    </Link>
  );
};

BoardCard.Skeleton = function BoardCardSkeleton() {
  return (
    <div className='aspect-[100/127] overflow-hidden rounded-lg'>
      <Skeleton className='h-full w-full' />
    </div>
  );
};
