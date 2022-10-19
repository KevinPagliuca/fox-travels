import type { ButtonHTMLAttributes } from 'react';

export type ButtonVariantType = 'primary' | 'secondary' | 'tertiary';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: ButtonVariantType;
  isLoading?: boolean;
}

export type ButtonAttributes = {
  isLoading?: boolean;
};
