import { breakpoints } from 'shared/breakpoints';
import { PAGE_MAX_WIDTH } from 'shared/constants';
import styled, { css } from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;
  background: ${({ theme }) => theme.colors.dark_blue};

  @media (min-width: ${breakpoints.desktop}) {
    padding: 4rem 2rem;
  }

  @media (max-width: ${breakpoints.desktop}) {
    padding: 2rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1rem;
  }
`;

export const LayoutContent = styled.div`
  ${({ theme }) => css`
    max-width: ${PAGE_MAX_WIDTH}px;
    margin: 0 auto;
    border-radius: 25px;
    background: ${theme.colors.tertiary};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);

    display: flex;
    overflow: hidden;
    flex: 1;
    position: relative;

    width: 100%;

    @media (max-width: ${breakpoints.mediumDesktop}) {
      flex-direction: column;
    }
  `}
`;
