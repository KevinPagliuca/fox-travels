import { breakpoints } from 'shared/breakpoints';
import styled from 'styled-components';

export const SidebarDrawerContainer = styled.div`
  padding: 2rem;
  max-width: 30rem;
  width: clamp(30rem, 100%, 30rem);
  flex: 1;

  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme.colors.dark_blue};
  color: ${({ theme }) => theme.colors.body};

  &:focus {
    box-shadow: none;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 85vw;
  }
`;

export const SidebarDrawerHeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;

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
`;

export const CloseButton = styled.button`
  border: 0;
  background: transparent;
  border-radius: 8px;

  position: absolute;
  right: -1rem;
  top: -1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.title};
  line-height: 0;
  transition: ${({ theme }) => theme.transitions.preset.default};
`;

export const SidebarDrawerContent = styled.div`
  margin-top: 2rem;
`;
