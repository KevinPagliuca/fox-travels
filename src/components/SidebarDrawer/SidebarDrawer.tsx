import { X } from 'phosphor-react';
import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Drawer } from 'components/Drawer';

import { ISidebarDrawerProps } from './SidebarDrawer.interfaces';
import * as S from './SidebarDrawer.styles';

export const SidebarDrawer = ({
  isOpen,
  onOpenChange,
  children,
  triggerClassName
}: ISidebarDrawerProps) => {
  return (
    <Drawer
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      triggerComponent={children}
      triggerClassName={triggerClassName}
    >
      <S.SidebarDrawerContainer>
        <S.SidebarDrawerHeaderWrapper>
          <S.CloseButton onClick={() => onOpenChange(false)}>
            <X size={32} />
          </S.CloseButton>
          <Link href="/" passHref>
            <a>
              <Image
                src="/green-logo-with-name.svg"
                alt="Fox Travels Logo"
                width={132}
                height={48}
              />
            </a>
          </Link>
        </S.SidebarDrawerHeaderWrapper>
        <S.SidebarDrawerContent></S.SidebarDrawerContent>
      </S.SidebarDrawerContainer>
    </Drawer>
  );
};

SidebarDrawer.displayName = 'SidebarDrawerComponent';
