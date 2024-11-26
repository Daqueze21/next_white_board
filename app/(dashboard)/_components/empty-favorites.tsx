import Image from 'next/image';

export const EmptyFavorites = () => {
  return (
    <div className='h-full flex flex-col items-center justify-center'>
      <Image src='/favorite.svg' height={140} width={140} alt='favorite' />
      <h2 className='mt-6 text-2xl font-semibold'>
        Sorry, no favorite boards!
      </h2>
      <p className='mt-2 text-muted-foreground text-sm '>
        Try to search something else!
      </p>
    </div>
  );
};