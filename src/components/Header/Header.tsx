import { Bell, MagnifyingGlass } from 'phosphor-react';
import React from 'react';

import { Avatar } from 'components/Avatar';

import * as S from './Header.styles';

export const Header = () => {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <S.HeaderSearchBox>
          <S.HeaderIconWrapper>
            <MagnifyingGlass size={24} className="svg-transition" />
          </S.HeaderIconWrapper>
          <S.SearchInput placeholder="Pesquise seu destino..." />
          <S.SearchButton>Pesquisar</S.SearchButton>
        </S.HeaderSearchBox>

        <S.NotificationButton>
          <Bell size={24} />
        </S.NotificationButton>

        <S.ProfileContainer>
          <Avatar name="Kevin Pagliuca" round size="medium" title="Kevin Pagliuca" />
          <S.ProfileInfo>
            <S.ProfileName>Kevin Pagliuca</S.ProfileName>
            <S.ProfileLevel>Traveler Pro</S.ProfileLevel>
          </S.ProfileInfo>
        </S.ProfileContainer>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};
Header.displayName = 'HeaderComponent';
