import React from 'react';

import { Scroll } from 'components/Scroll';
import { Sidebar } from 'components/Sidebar';
import { LayoutContainer, LayoutContent } from 'layouts/common';

import type { IDefaultLayoutProps } from './DefaultLayout.interfaces';
import * as S from './DefaultLayout.styles';

export const DefaultLayout = ({ children, contentHeader }: IDefaultLayoutProps) => {
  return (
    <LayoutContainer>
      <LayoutContent>
        <Sidebar />
        <S.LayoutContentWrapper>
          {contentHeader && contentHeader}
          <Scroll verticallOffset={8}>{children}</Scroll>
        </S.LayoutContentWrapper>
      </LayoutContent>
    </LayoutContainer>
  );
};
