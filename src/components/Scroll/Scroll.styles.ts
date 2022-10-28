import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

import { SCROLLBAR_SIZE } from 'shared/constants';
import styled from 'styled-components';

import { ScrollAreaViewportAttributes as ScrollAreaViewportProps } from './Scroll.interfaces';

export const ScrollArea = styled(ScrollAreaPrimitive.Root)`
  overflow: hidden;
  height: 100%;
  width: 100%;
`;

export const ScrollAreaViewport = styled(ScrollAreaPrimitive.Viewport)<ScrollAreaViewportProps>`
  width: 100%;
  height: 100%;
  transition: ${({ theme }) => theme.transitions.preset.default};

  &.fullHeight > div {
    display: flex !important;
    flex-direction: column !important;
    height: 100%;
  }
`;

export const ScrollAreaScrollbar = styled(ScrollAreaPrimitive.Scrollbar)`
  display: flex;
  justify-content: center;
  user-select: none;
  touch-action: none;
  padding: ${SCROLLBAR_SIZE / 4}px;
  background: rgba(0, 0, 0, 0.25);
  border-radius: ${SCROLLBAR_SIZE / 2}px;
  transition: background 0.2s ease-out;

  &[data-orientation='vertical'] {
    width: ${SCROLLBAR_SIZE}px;
  }

  &[data-orientation='horizontal'] {
    flex-direction: column;
    height: ${SCROLLBAR_SIZE}px;
  }
`;

export const ScrollAreaThumb = styled(ScrollAreaPrimitive.Thumb)`
  flex: 1;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: ${SCROLLBAR_SIZE / 2}px;
  position: relative;
  transition: background 0.2s ease-out;

  &:hover {
    background: ${({ theme }) => theme.colors.body};
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    min-width: ${SCROLLBAR_SIZE}px;
    min-height: ${SCROLLBAR_SIZE}px;
  }
`;

export const ScrollAreaCorner = styled(ScrollAreaPrimitive.Corner)`
  background: ${({ theme }) => theme.colors.primary};
  border-radius: ${SCROLLBAR_SIZE / 4}px;
`;
