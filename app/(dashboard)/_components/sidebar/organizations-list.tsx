'use client';

import { useOrganizationList } from '@clerk/nextjs';
import { OrganizationItem } from './organization-item';

export const OrganizationsList = () => {
  const { userMemberships } = useOrganizationList({
    userMemberships: { infinite: true },
  });

  if (!userMemberships.data?.length) return null;
  return (
    <ul>
      {userMemberships.data?.map((membership) => (
        <OrganizationItem
          key={membership.organization.id}
          id={membership.organization.id}
          name={membership.organization.name}
          imageUrl={membership.organization.imageUrl}
        />
      ))}
    </ul>
  );
};
