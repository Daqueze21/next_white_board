'use client';

import { Hint } from '@/components/hint';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

interface ToolButtonProps {
  icon: LucideIcon;
  label: string;
  isActive?: boolean;
  isDisabled?: boolean;
  onClick: () => void;
}

export const ToolButton = ({
  icon: Icon,
  label,
  isActive,
  isDisabled,
  onClick,
}: ToolButtonProps) => {
  return (
    <Hint label={label} side='right' sideOffset={14}>
      <Button
        disabled={isDisabled}
        size='icon'
        variant={isActive ? 'boardActive' : 'board'}
        onClick={onClick}>
        <Icon />
      </Button>
    </Hint>
  );
};
