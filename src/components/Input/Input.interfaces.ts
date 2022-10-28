/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputHTMLAttributes, ReactNode } from 'react';
import type { Control, FieldError, FieldValues } from 'react-hook-form';

import { FieldComponentVariantOptions } from 'interfaces/generic.interfaces';

export type IInputProps = {
  name: string;
  label?: string;
  control?: Control<FieldValues | any>;
  error?: FieldError;
  variant?: FieldComponentVariantOptions;
  wrapperClassName?: string;
  customInput?: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

export type InputFieldAttributes = {
  hasError?: boolean;
  hasValue?: boolean;
  variant?: FieldComponentVariantOptions;
};
