import React from 'react';

import { AppLoading } from 'assets/AppLoading';

import * as S from './styles';

export const Loader = () => {
  return (
    <S.Container>
      <AppLoading />
    </S.Container>
  );
};
