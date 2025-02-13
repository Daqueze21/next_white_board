'use client';

import { useSearchParams } from 'next/navigation';
import { Canvas } from './_components/canvas';
import { Room } from '@/components/room';
import { Loading } from './_components/loading';

interface BoardIdPageProps {
  params: { boardId: string };
}

const BoardIdPage = ({params}: BoardIdPageProps) => {
  const searchParams = useSearchParams();
  console.log('🚀 ~ BoardIdPage ~ searchParams:', searchParams);
  return <Loading />
  return (
    <Room roomId={params.boardId}  fallback={<Loading />  }>
      <Canvas boardId={params.boardId} />
    </Room>
  );
};

export default BoardIdPage;
