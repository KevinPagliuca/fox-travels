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
  verticallOffset = 0,
  horizontalOffset = 0,
}: IScrollProps) => {
  const paddingRight = SCROLLBAR_SIZE + verticallOffset;
  const paddingBottom = SCROLLBAR_SIZE + horizontalOffset;

  const marginRight = -(paddingRight / 2);
  const marginBottom = -(paddingBottom / 2);

  const paddingLeft = Math.abs(marginRight);

  return (
    <S.ScrollArea type={rootProps?.type ?? 'auto'} {...rootProps}>
      <S.ScrollAreaViewport
        {...viewportProps}
        style={{
          ...viewportProps?.style,
          paddingRight: !hideVerticalScrollbar ? paddingRight : 0,
          paddingBottom: !hideHorizontalScrollbar ? paddingBottom : 0,
          paddingLeft: !hideVerticalScrollbar ? paddingLeft : 0,
          marginRight: !hideVerticalScrollbar ? marginRight : 0,
          marginBottom: !hideHorizontalScrollbar ? marginBottom : 0,
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
