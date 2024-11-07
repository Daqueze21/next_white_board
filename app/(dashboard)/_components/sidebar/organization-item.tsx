import Image from 'next/image';
import { useOrganization, useOrganizationList } from '@clerk/nextjs';

import { cn } from '@/lib/utils';
import { Hint } from '@/components/hint';

interface OrganizationItemProps {
  id: string;
  name: string;
  imageUrl: string;
}

export const OrganizationItem = ({
  id,
  name,
  imageUrl,
}: OrganizationItemProps) => {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  const isActive = organization?.id === id;

  const onClick = () => {
    if (!setActive) return;

    setActive({ organization: id });
  };

  return (
    <div className='relative aspect-square'>
      <Hint label={name} side='right' align='start' sideOffset={16}>
        <Image
          alt={name}
          fill
          src={imageUrl}
          onClick={onClick}
          className={cn(
            'rounded-md opacity-75 hover:opacity-100 transition cursor-pointer',
            isActive && 'opacity-100'
          )}
        />
      </Hint>
    </div>
  );
};
