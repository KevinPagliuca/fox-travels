import { List } from 'phosphor-react';

import { breakpoints } from 'shared/breakpoints';
import styled, { css } from 'styled-components';

import { NavigationItemAttributes } from './Sidebar.interfaces';

const hideContent = css`
  @media (max-width: ${breakpoints.mediumDesktop}) {
    display: none;
  }
`;

export const SidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  width: 18.25rem;
  padding: 3.125rem 1.25rem;
  overflow: hidden;
  height: 100%;
  gap: 3rem;

  @media (max-width: ${breakpoints.mediumDesktop}) {
    padding: unset;
    width: unset;
    overflow: unset;
    height: fit-content;
    padding: 1rem 1.5rem 0.5rem;
  }
`;

export const SidebarIcon = styled(List)``;

export const SidebarHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 3px solid transparent;
    transition: ${({ theme }) => theme.transitions.preset.default};

    &:focus {
      box-shadow: none;
      border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
    }
  }

  .sibarTriggerButton {
    display: none;
    background: none;
    border: 0;
    color: ${({ theme }) => theme.colors.title};
    line-height: 0;
    border-radius: 8px;
  }

  @media (max-width: ${breakpoints.mediumDesktop}) {
    justify-content: space-between;

    .sibarTriggerButton {
      display: block;
      transition: ${({ theme }) => theme.transitions.preset.default};

      &:hover,
      &:focus {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 100%;
  padding-right: 1rem;

  ${hideContent};
`;

export const NavigationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  height: 100%;
  padding: 0.25rem 1.25rem 0.25rem 0;
`;

export const NavigationItem = styled.div<NavigationItemAttributes>`
  ${({ theme, isActive, isHidden }) => css`
    display: ${isHidden ? 'none' : 'flex'};
    align-items: center;
    justify-content: center;
    padding: 0 0.25rem;

    a {
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

      &:focus {
        box-shadow: 0 0 0 2px ${isActive ? theme.colors.secondary : theme.colors.primary};
      }
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
  ${hideContent};
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

  @media (max-width: ${breakpoints.mediumDesktop}) {
    flex-direction: row;
    padding: 0.5rem;

    span {
      display: none;
    }
  }
`;
