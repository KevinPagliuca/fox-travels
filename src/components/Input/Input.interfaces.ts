/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputHTMLAttributes } from 'react';
import type { Control, FieldValues } from 'react-hook-form';

export type IInputProps = {
  name: string;
  label?: string;
  control?: Control<FieldValues | any>;
} & InputHTMLAttributes<HTMLInputElement>;
