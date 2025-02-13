'use client';

import { ReactNode } from 'react';
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from '@liveblocks/react/suspense';

interface RoomProps {
  children: ReactNode;
  roomId: string;
  fallback: ReactNode;
}

const liveBlockApiKey = process.env.NEXT_LIVEBLOCK_CLIENT_KEY!;

export const Room = ({ children, roomId, fallback }: RoomProps) => {
  console.log('🚀 ~ Room ~ liveBlockApiKey:', liveBlockApiKey);
  const liveblockApiKey =
    'pk_dev_UNDP4Xxi8hU64y2Zwgmj7uv_zcVISICUNBufafGYa84Imzik5pdVGRjG28ibDvdh';

  return (
    <LiveblocksProvider publicApiKey={liveblockApiKey}>
      <RoomProvider id={roomId}>
        <ClientSideSuspense fallback={fallback}>{children}</ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
};
