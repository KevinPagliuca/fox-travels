import React from 'react';

import { Scroll } from 'components/Scroll';
import { LayoutContainer } from 'layouts/common';

import type { IPublicLayoutProps } from './PublicLayout.interfaces';
import * as S from './PublicLayout.styles';

export const PublicLayout = ({ children }: IPublicLayoutProps) => {
  return (
    <LayoutContainer>
      <S.PublicLayoutContainer>
        <Scroll hideHorizontalScrollbar verticallOffset={16}>
          <S.PublicLayoutContent>{children}</S.PublicLayoutContent>
        </Scroll>
      </S.PublicLayoutContainer>
    </LayoutContainer>
  );
};
