import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Scroll } from 'components/Scroll';
import { Bookmarks, Gear, Layout, Ticket, SignOut } from 'phosphor-react';

import { ISidebarProps } from './Sidebar.interfaces';
import * as S from './Sidebar.styles';

const navigationItems = [
  {
    name: 'Dashboard',
    href: '/',
    icon: <Layout size={24} />,
  },
  {
    name: 'Minhas passagens',
    href: '/my-tickets',
    icon: <Ticket size={24} />,
  },
  {
    name: 'Favoritos',
    href: '/favorites',
    icon: <Bookmarks size={24} />,
  },
  {
    name: 'Configurações',
    href: '/settings',
    icon: <Gear size={24} />,
  },
];

export const Sidebar = ({}: ISidebarProps) => {
  const { pathname } = useRouter();

  return (
    <S.SidebarContainer>
      <S.SidebarHeader>
        <Image src={`/green-logo-with-name.svg`} alt="Fox Travels Logo" width={132} height={48} />
      </S.SidebarHeader>

      <S.SidebarContent>
        <Scroll verticallOffset={4}>
          <S.NavigationList>
            {navigationItems.map((item) => (
              <S.NavigationItem key={item.name} isActive={item.href === pathname}>
                {item.icon}
                <Link href={item.href}>
                  <a>{item.name}</a>
                </Link>
              </S.NavigationItem>
            ))}
          </S.NavigationList>
        </Scroll>
      </S.SidebarContent>

      <S.SidebarFooter>
        <S.LogoutButton>
          <SignOut size={24} />
          Deslogar
        </S.LogoutButton>
      </S.SidebarFooter>
    </S.SidebarContainer>
  );
};
