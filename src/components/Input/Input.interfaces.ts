/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputHTMLAttributes } from 'react';
import type { Control, FieldError, FieldValues } from 'react-hook-form';

export type IInputProps = {
  name: string;
  label?: string;
  control?: Control<FieldValues | any>;
  error?: FieldError;
} & InputHTMLAttributes<HTMLInputElement>;

export type InputFieldAttributes = {
  hasError?: boolean;
  hasValue?: boolean;
};
