import React from 'react';

import { SCROLLBAR_SIZE } from 'shared/constants';

import { IScrollProps } from './Scroll.interfaces';
import * as S from './Scroll.styles';

export const Scroll = ({
  children,
  rootProps,
  viewportProps,
  hideHorizontalScrollbar,
  hideVerticalScrollbar,
  verticallOffset,
  horizontalOffset,
}: IScrollProps) => {
  return (
    <S.ScrollArea type={rootProps?.type ?? 'auto'} {...rootProps}>
      <S.ScrollAreaViewport
        {...viewportProps}
        style={{
          paddingRight: SCROLLBAR_SIZE + (verticallOffset ?? 0),
          paddingBottom: SCROLLBAR_SIZE + (horizontalOffset ?? 0),
        }}
      >
        {children}
      </S.ScrollAreaViewport>
      {!hideVerticalScrollbar && (
        <S.ScrollAreaScrollbar orientation="vertical">
          <S.ScrollAreaThumb />
        </S.ScrollAreaScrollbar>
      )}

      {!hideHorizontalScrollbar && (
        <S.ScrollAreaScrollbar orientation="horizontal">
          <S.ScrollAreaThumb />
        </S.ScrollAreaScrollbar>
      )}
      <S.ScrollAreaCorner />
    </S.ScrollArea>
  );
};
