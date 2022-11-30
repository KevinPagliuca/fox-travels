import React from 'react';

import Head from 'next/head';

import { Sidebar } from 'components/Sidebar';
import { LayoutContainer, LayoutContent } from 'layouts/common';

import type { IDefaultLayoutProps } from './DefaultLayout.interfaces';
import * as S from './DefaultLayout.styles';

export const DefaultLayout = ({ children, contentHeader, pageTitle }: IDefaultLayoutProps) => {
  return (
    <LayoutContainer>
      {pageTitle && (
        <Head>
          <title>{pageTitle}</title>
        </Head>
      )}
      <LayoutContent>
        <Sidebar />
        <S.DefaultLayoutContentWrapper>
          {contentHeader && contentHeader}
          {children}
        </S.DefaultLayoutContentWrapper>
      </LayoutContent>
    </LayoutContainer>
  );
};

DefaultLayout.displayName = 'DefaultLayoutComponent';
