import React from 'react';

import { Scroll } from 'components/Scroll';
import { Sidebar } from 'components/Sidebar';

import { IDefaultDashboardLayoutProps } from './DefaultDashboardLayout.interfaces';
import * as S from './DefaultDashboardLayout.styles';

export const DefaultDashboardLayout = ({
  children,
  contentHeader,
}: IDefaultDashboardLayoutProps) => {
  return (
    <S.LayoutContainer>
      <S.LayoutContent>
        <Sidebar />
        <S.LayoutContentWrapper>
          {contentHeader && contentHeader}
          <Scroll verticallOffset={8}>{children}</Scroll>
        </S.LayoutContentWrapper>
      </S.LayoutContent>
    </S.LayoutContainer>
  );
};
