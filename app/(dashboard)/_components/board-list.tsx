'use client';

import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { EmptyBoards } from './empty-boards';
import { EmptyFavorites } from './empty-favorites';
import { EmptySearch } from './empty-search';
import { BoardCard } from './board-card';
import { NewBoardButton } from './new-board-button';

interface BoardListProps {
  organizationId: string;
  query: {
    search?: string;
    favorites: string;
  };
}

export const BoardList = ({ organizationId, query }: BoardListProps) => {
  const data = useQuery(api.boards.getBoards, { organizationId, ...query });

  if (data === undefined) {
    return (
      <div>
        <h2 className='text-3xl'>
          {query.favorites ? 'Favorite boards' : 'Team boards'}
        </h2>
        <div className='grid grid-cols-1 mt-8 pb-10 gap-5 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-6'>
          <NewBoardButton organizationId={organizationId} disabled />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
        </div>
      </div>
    );
  }

  if (!data?.length && query.search) {
    return <EmptySearch />;
  }

  if (!data?.length && query.favorites) {
    return <EmptyFavorites />;
  }

  if (!data?.length) {
    return <EmptyBoards />;
  }

  return (
    <div>
      <h2 className='text-3xl'>
        {query.favorites ? 'Favorite boards' : 'Team boards'}
      </h2>
      <div className='grid grid-cols-1 mt-8 pb-10 gap-5 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-6'>
        <NewBoardButton organizationId={organizationId} />
        {data?.map((board) => (
          <BoardCard
            key={board._id}
            id={board._id}
            title={board.title}
            imageUrl={board.imageUrl}
            authorId={board.authorId}
            authorName={board.authorName}
            createdAt={board._creationTime}
            organizationId={board.organizationId}
            isFavorite={board.isFavorite}
          />
        ))}
      </div>
    </div>
  );
};
