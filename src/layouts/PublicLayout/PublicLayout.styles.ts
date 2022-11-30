import { breakpoints } from 'shared/breakpoints';
import styled from 'styled-components';

import { LayoutContent } from 'layouts/common';

export const PublicLayoutContainer = styled(LayoutContent)`
  margin: auto;
  width: unset;
  flex: unset;
  padding: 1rem;

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`;

export const PublicLayoutContent = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
`;
