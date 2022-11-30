import { breakpoints } from 'shared/breakpoints';
import styled from 'styled-components';

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  width: 24.5rem;
  overflow: hidden auto;

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    max-width: unset;
  }
`;
