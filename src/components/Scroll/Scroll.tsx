import React, { memo } from 'react';

import { IScrollProps } from './Scroll.interfaces';
import * as S from './Scroll.styles';

const ScrollComponent = ({
  children,
  rootProps,
  viewportProps,
  hideHorizontalScrollbar,
  hideVerticalScrollbar,
  childrenFullHeight
}: IScrollProps) => {
  const childrenClassName = childrenFullHeight ? 'fullHeight' : '';
  return (
    <S.ScrollArea type={rootProps?.type ?? 'auto'} {...rootProps}>
      <S.ScrollAreaViewport
        {...viewportProps}
        className={`${viewportProps?.className} ${childrenClassName}`}
      >
        {children}
      </S.ScrollAreaViewport>
      {!hideVerticalScrollbar && (
        <S.ScrollAreaScrollbar orientation="vertical" className="verticalScrollbar">
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

export const Scroll = memo(ScrollComponent);
