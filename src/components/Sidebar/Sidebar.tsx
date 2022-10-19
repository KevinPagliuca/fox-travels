import React, { useCallback, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Scroll } from 'components/Scroll';
import { SidebarDrawer } from 'components/SidebarDrawer';
import { Bookmarks, Gear, Layout, Ticket, SignOut } from 'phosphor-react';
import { useAuthStore } from 'store/Authentication/Auth.store';

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

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useRouter();
  const handleLogout = useAuthStore((state) => state.handleLogout);

  const onOpenChange = useCallback((isOpen: boolean) => {
    setIsOpen(isOpen);
  }, []);

  return (
    <S.SidebarContainer>
      <S.SidebarHeader>
        <Link href="/" passHref tabIndex={0}>
          <a>
            <Image src="/green-logo-with-name.svg" alt="Fox Travels Logo" width={132} height={48} />
          </a>
        </Link>
        <SidebarDrawer
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          triggerClassName="sibarTriggerButton"
        >
          <S.SidebarIcon size={32} />
        </SidebarDrawer>
      </S.SidebarHeader>

      <S.SidebarContent>
        <Scroll verticallOffset={4}>
          <S.NavigationList>
            {navigationItems.map((item) => (
              <S.NavigationItem key={item.name} isActive={item.href === pathname} tabIndex={-1}>
                <Link href={item.href}>
                  <a tabIndex={0}>
                    {item.icon}
                    <span>{item.name}</span>
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
          <span>Deslogar</span>
        </S.LogoutButton>
      </S.SidebarFooter>
    </S.SidebarContainer>
  );
};
