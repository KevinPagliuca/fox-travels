import { breakpoints } from 'shared/breakpoints';
import styled from 'styled-components';

export const LayoutContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 3.125rem 1.5rem 3.125rem 0;
  position: relative;
  gap: 2.5rem;

  @media (max-width: ${breakpoints.mediumDesktop}) {
    flex-direction: column;
    padding: 0.5rem 1.5rem;
    overflow-y: hidden;
  }
`;
