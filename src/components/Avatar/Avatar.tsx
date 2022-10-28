import React from 'react';

import { IAvatarProps } from './Avatar.interfaces';
import * as S from './Avatar.styles';

const sizes = {
  small: '2.5rem',
  medium: '4rem',
  large: '6rem'
} as const;

export const Avatar = ({ size = 'medium', ...rest }: IAvatarProps) => {
  return <S.Avatar {...rest} size={sizes[size]} />;
};
