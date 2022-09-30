import { ReactAvatarProps } from 'react-avatar';

export interface IAvatarProps extends ReactAvatarProps {
  size?: 'small' | 'medium' | 'large';
}

export type AvatarAtributtes = ReactAvatarProps & {
  size?: 'small' | 'medium' | 'large';
};
