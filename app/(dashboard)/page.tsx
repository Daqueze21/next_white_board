'use client';

import { SignInButton, useOrganization } from '@clerk/nextjs';
import { Authenticated, Unauthenticated } from 'convex/react';
import { EmptyOrg } from './_components/empty-org';
import { BoardList } from './_components/board-list';

interface DashboardPageProps {
  searchParams: {
    search?: string;
    favorites: string;
  };
}

export default function DashboardPage({searchParams}:DashboardPageProps) {
  const organization = useOrganization();
  return (
    <main className='h-[calc(100%-80px)] flex-1 p-6 bg-amber-300 '>
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        {!organization ? (
          <EmptyOrg />
        ) : (
          <BoardList organizationId={organization.id} query={searchParams} />
        )}
      </Authenticated>
    </main>
  );
}
