import { ScrollAreaProps, ScrollAreaViewportProps } from '@radix-ui/react-scroll-area';
import { ReactNode, RefAttributes } from 'react';

export interface IScrollProps {
  children: ReactNode;
  rootProps?: ScrollAreaProps & RefAttributes<HTMLDivElement>;
  viewportProps?: ScrollAreaViewportProps & RefAttributes<HTMLDivElement>;
  hideVerticalScrollbar?: boolean;
  hideHorizontalScrollbar?: boolean;
  childrenFullHeight?: boolean;
}

export type ScrollAreaViewportAttributes = {
  verticalOffset?: number;
  horizontalOffset?: number;
};
