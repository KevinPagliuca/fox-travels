import React from 'react';

import Head from 'next/head';

import { LayoutContainer } from 'layouts/common';

import type { IPublicLayoutProps } from './PublicLayout.interfaces';
import * as S from './PublicLayout.styles';

export const PublicLayout = ({ children, pageTitle }: IPublicLayoutProps) => {
  return (
    <LayoutContainer>
      {pageTitle && (
        <Head>
          <title>{pageTitle}</title>
        </Head>
      )}
      <S.PublicLayoutContainer>
        <S.PublicLayoutContent>{children}</S.PublicLayoutContent>
      </S.PublicLayoutContainer>
    </LayoutContainer>
  );
};

PublicLayout.displayName = 'PublicLayoutComponent';
