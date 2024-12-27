import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';
import React from 'react';

interface CardFooterProps {
  title: string;
  authorLabel: string;
  createdAtLabel: string;
  onClick: () => void;
  disabled: boolean;
  isFavorite: boolean;
}

export const CardFooter = ({
  title,
  authorLabel,
  createdAtLabel,
  onClick,
  disabled,
  isFavorite,
}: CardFooterProps) => {
  return (
    <div className='relative p-3 bg-white'>
      <p className='max-w-[calc(100%-20px)] truncate text-[13px]'>{title}</p>
      <p className='opacity-0 group-hover:opacity-100 transition-opacity truncate text-[11px] text-muted-foreground'>
        {authorLabel}, {createdAtLabel}
      </p>
      <button
        className={cn(
          'top-3 right-3 opacity-0 group-hover:opacity-100 transition absolute truncate text-muted-foreground hover:text-blue-600',
          disabled && 'cursor-not-allowed'
        )}
        disabled={disabled}
        onClick={onClick}>
        <Star
          className={cn('h-4 w-4', isFavorite && 'fill-blue-600 text-blue-600')}
        />
      </button>
    </div>
  );
};
