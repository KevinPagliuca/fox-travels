import { ReactNode, RefAttributes } from 'react';

import { ScrollAreaProps, ScrollAreaViewportProps } from '@radix-ui/react-scroll-area';

export interface IScrollProps {
  children: ReactNode;
  rootProps?: ScrollAreaProps & RefAttributes<HTMLDivElement>;
  viewportProps?: ScrollAreaViewportProps & RefAttributes<HTMLDivElement>;
  hideVerticalScrollbar?: boolean;
  hideHorizontalScrollbar?: boolean;
  verticallOffset?: number;
  horizontalOffset?: number;
}

export type ScrollAreaViewportAttributes = {
  verticalOffset?: number;
  horizontalOffset?: number;
};
