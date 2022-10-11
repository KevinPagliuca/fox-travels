import { ReactNode } from 'react';

export interface ISidebarDrawerProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  children: ReactNode;
  triggerClassName?: string;
}
