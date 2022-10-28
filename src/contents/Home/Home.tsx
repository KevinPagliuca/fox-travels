import React from 'react';

import { getAuthUser, useAuthStore } from 'store/Authentication';

import { Tabs, TabsOptionsType } from 'components/Tabs';
import { TravelCard } from 'components/TravelCard';

import { FakeTravels } from 'interfaces/travels.interfaces';

import * as S from './Home.styles';

export const HomeContent = () => {
  const { isAutenticated, user } = useAuthStore(getAuthUser);

  const tabOptions: TabsOptionsType[] = [
    {
      key: 'most-popular',
      title: 'Mais populares',
      content: <div>Conteúdo 1</div>
    },
    {
      key: 'offers',
      title: 'Ofertas',
      content: <div>Conteúdo 2</div>
    }
  ];

  return (
    <S.HomeContentContainer>
      <S.TitleWrapper>
        <S.UserName>Olá, {isAutenticated ? user?.name : 'Visitante'}.</S.UserName>
        <S.Message>Bem vindo, explore nossas viagens disponívels!</S.Message>
      </S.TitleWrapper>

      <S.EasyVisaWrapper>
        <S.EasyVisaHeader>
          <h1>Destinos com visto fácil</h1>
          <span tabIndex={0}>Ver todos</span>
        </S.EasyVisaHeader>

        <S.EasyVisaContent>
          {FakeTravels.map(item => (
            <TravelCard key={item.id} item={item} orientation="landscape" />
          ))}
        </S.EasyVisaContent>
      </S.EasyVisaWrapper>

      <S.OthersTravelsWrapper>
        <Tabs tabOptions={tabOptions} />
      </S.OthersTravelsWrapper>
    </S.HomeContentContainer>
  );
};
