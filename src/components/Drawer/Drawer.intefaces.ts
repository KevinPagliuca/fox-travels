import { ReactNode } from 'react';

export interface IDrawerProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  triggerComponent: ReactNode;
  children: ReactNode;
  triggerClassName?: string;
}
