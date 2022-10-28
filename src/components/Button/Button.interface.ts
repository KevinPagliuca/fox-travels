import type { ButtonHTMLAttributes } from 'react';

export type ButtonVariantType = 'primary' | 'secondary' | 'tertiary' | 'darkblue' | 'unstyled';

type FontWeightType = '700' | '600' | '500' | '400';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: ButtonVariantType;
  isLoading?: boolean;
  fontWeight?: FontWeightType;
  fullWidth?: boolean;
}

export type ButtonAttributes = {
  isLoading?: boolean;
  fontWeight?: FontWeightType;
  fullWidth?: boolean;
};
