import styled, { css } from 'styled-components';

import { NavigationItemAttributes } from './Sidebar.interfaces';

export const SidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  width: 18.25rem;
  padding: 3.125rem 1.5rem;
  overflow: hidden;
  height: 100%;
  gap: 3rem;
`;

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 100%;
`;

export const NavigationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100%;
`;

export const NavigationItem = styled.div<NavigationItemAttributes>`
  ${({ theme, isActive }) => css`
    display: flex;
    align-items: center;
    width: 100%;

    background: ${isActive ? theme.colors.primary : 'transparent'};
    color: ${isActive ? theme.colors.tertiary : theme.colors.body};

    gap: 1.25rem;
    padding: 0.75rem 0.25rem 0.75rem 1.25rem;

    border-radius: 13px;

    cursor: pointer;

    font-size: 0.875rem;
    font-weight: ${isActive ? 700 : 400};
    white-space: nowrap;

    transition: background 0.2s ease-in-out;

    &:hover {
      background: ${theme.colors.primary};
      color: ${theme.colors.black};
    }
  `}
`;

export const SidebarFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  margin-top: auto;
`;

export const LogoutButton = styled.button`
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.colors.body};

  font-size: 0.875rem;
  font-weight: 700;
  white-space: nowrap;

  display: flex;
  align-items: center;
  width: 100%;

  gap: 1.25rem;
  padding: 0.75rem 0.25rem 0.75rem 1.25rem;

  border-radius: 13px;

  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
