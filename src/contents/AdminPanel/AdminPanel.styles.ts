import styled, { css } from 'styled-components';

import { Button } from 'components/Button';

export const AdminPanelContainer = styled.div`
  padding: 0 0.25rem;
`;

export const NewRegistersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

export const RegistersButton = styled(Button)`
  padding: 1.5rem 2rem !important;
  font-weight: 400 !important;
`;

export const NewRegistersTitle = styled.h2`
  ${({ theme }) => css`
    font-size: 1.5rem;
    font-weight: 500;
    color: ${theme.colors.title};
    margin-bottom: 1rem;
  `}
`;

export const AdminPanelContent = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
