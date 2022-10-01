import React from 'react';

import { Tabs, TabsOptionsType } from 'components/Tabs';
import { TravelCard } from 'components/TravelCard';
import { FakeTravels } from 'interfaces/travels.interfaces';

import * as S from './Home.styles';

export const HomeContent = () => {
  const tabOptions: TabsOptionsType[] = [
    {
      key: 'most-popular',
      title: 'Mais populares',
      content: <div>Conteúdo 1</div>,
    },
    {
      key: 'offers',
      title: 'Ofertas',
      content: <div>Conteúdo 2</div>,
    },
  ];

  return (
    <S.HomeContentContainer>
      <S.TitleWrapper>
        <S.UserName>Olá, Kevin Pagliuca!</S.UserName>
        <S.Message>Bem vindo de volta, explore o mundo...</S.Message>
      </S.TitleWrapper>

      <S.EasyVisaWrapper>
        <S.EasyVisaHeader>
          <h1>Destinos com visto fácil</h1>
          <span>Ver todos</span>
        </S.EasyVisaHeader>

        <S.EasyVisaContent>
          {FakeTravels.map((item) => (
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
