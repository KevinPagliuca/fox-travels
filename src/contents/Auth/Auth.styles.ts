import { breakpoints } from 'shared/breakpoints';
import styled from 'styled-components';

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20.5rem;

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`;
