import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Scroll } from 'components/Scroll';
import { Bookmarks, Gear, Layout, Ticket, SignOut } from 'phosphor-react';
import { useAuthStore } from 'store/Auth.store';

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
  const handleLogout = useAuthStore((state) => state.handleLogout);

  return (
    <S.SidebarContainer>
      <S.SidebarHeader>
        <Image src={`/green-logo-with-name.svg`} alt="Fox Travels Logo" width={132} height={48} />
      </S.SidebarHeader>

      <S.SidebarContent>
        <Scroll verticallOffset={4}>
          <S.NavigationList>
            {navigationItems.map((item) => (
              <S.NavigationItem key={item.name} isActive={item.href === pathname} tabIndex={-1}>
                <Link href={item.href}>
                  <a tabIndex={0}>
                    {item.icon}
                    {item.name}
                  </a>
                </Link>
              </S.NavigationItem>
            ))}
          </S.NavigationList>
        </Scroll>
      </S.SidebarContent>

      <S.SidebarFooter>
        <S.LogoutButton type="button" onClick={handleLogout}>
          <SignOut size={24} />
          Deslogar
        </S.LogoutButton>
      </S.SidebarFooter>
    </S.SidebarContainer>
  );
};
