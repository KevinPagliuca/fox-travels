import { LayoutContent } from 'layouts/common';
import { breakpoints } from 'shared/breakpoints';
import styled from 'styled-components';

export const PublicLayoutContainer = styled(LayoutContent)`
  margin: auto;
  width: unset;
  flex: unset;
  padding: 2rem 1rem;

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`;

export const PublicLayoutContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  overflow: hidden;
`;
