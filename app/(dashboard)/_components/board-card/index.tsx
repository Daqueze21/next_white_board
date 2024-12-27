'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Overlay } from './overlay';
import { useAuth } from '@clerk/nextjs';
import { Skeleton } from '@/components/ui/skeleton';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
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

  return (
    <Link href={`/board/${id}`}>
      <div className='flex flex-col justify-between group aspect-[100/127] overflow-hidden border rounded-lg'>
        <div className='relative flex-1 bg-amber-50'>
          <Image src={imageUrl} alt={title} className='object-fit' fill />
          <Overlay />
        </div>
        <CardFooter
          title={title}
          authorLabel={authorLabel}
          createdAtLabel={createdAtLabel}
          onClick={() => {}}
          disabled={false}
          isFavorite={isFavorite}
        />
      </div>
    </Link>
  );
};


BoardCard.Skeleton = function BoardCardSkeleton()  {
  return (
    <div className='aspect-[100/127] overflow-hidden rounded-lg'>
      <Skeleton className='h-full w-full'/>
    </div>
  );
}
