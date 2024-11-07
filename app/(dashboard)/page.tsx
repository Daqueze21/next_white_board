'use client';

import { SignInButton} from '@clerk/nextjs';
import { Authenticated, Unauthenticated } from 'convex/react';

export default function Home() {
  return (
    <main className='h-full'>
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <div className='flex flex-col gap-y-4'>authenticated user</div>
      </Authenticated>
    </main>
  );
}
