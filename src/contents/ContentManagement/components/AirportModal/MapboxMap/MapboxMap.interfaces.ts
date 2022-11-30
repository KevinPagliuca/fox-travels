import { CSSProperties } from 'react';

export interface IMapboxMapProps {
  width?: string | number;
  height?: string | number;
  style?: CSSProperties | undefined;
  searchAddressInputId?: string;
}

export type AirportIconWrapperAttributes = {
  isSelected: boolean;
};
