'use client';

import { ReactNode } from 'react';
import { ClerkProvider, useAuth } from '@clerk/nextjs';
import { ConvexProviderWithClerk } from 'convex/react-clerk';
import { ConvexReactClient } from 'convex/react';
// Authenticated, AuthLoading,

interface ConvexClientProviderProps {
  children: ReactNode;
}

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;
const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!;
console.log("🚀 ~ publishableKey:", publishableKey)


const convex = new ConvexReactClient(convexUrl);

export const ConvexClientProvider = ({
  children,
}: ConvexClientProviderProps) => {
  return (
    <ClerkProvider dynamic publishableKey={publishableKey}>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};
