'use client';

import { SignInButton, UserButton } from '@clerk/nextjs';
import { Authenticated, Unauthenticated } from 'convex/react';

export default function Home() {
  return (
    <main>
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <UserButton />
        <div className='flex flex-col gap-y-4'>
          authenticated user
        </div>
      </Authenticated>
    </main>
  );
}
