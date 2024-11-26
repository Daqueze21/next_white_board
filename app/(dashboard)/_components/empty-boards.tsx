import { Button } from "@/components/ui/button";
import Image from 'next/image';

export const EmptyBoards = () => {
  return (
    <div className='h-full flex flex-col items-center justify-center'>
      <Image src='/whiteboard.svg' height={140} width={140} alt='white board'/>
      <h2 className='mt-6 text-2xl font-semibold'>Create your first board</h2>
      <p className='mt-2 text-muted-foreground text-sm '>
        Start by creating a board for your organization
      </p>
      <div className='mt-6'>
        <Button size='lg'>Create board</Button>
      </div>
    </div>
  );
};
