import styled, { css } from 'styled-components';

import { Button } from 'components/Button';

export const ContentManagementContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.125rem 2rem 0.125rem 0.5rem;
  width: 100%;
  flex: 1;
  overflow: hidden auto;
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

export const ContentManagementTitle = styled.h1`
  ${({ theme }) => css`
    font-size: 2rem;
    font-weight: 700;
    color: ${theme.colors.title};
    font-family: ${theme.fonts.base};
  `}
`;

export const ContentManagementNotice = styled.p`
  ${({ theme }) => css`
    font-size: 1.125rem;
    font-weight: 400;
    color: ${theme.colors.body};
    margin-bottom: 1rem;
  `}
`;

export const ContentManagementContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 1rem;
  width: 100%;
`;

export const SectionHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SectionTitle = styled.h4`
  ${({ theme }) => css`
    font-size: 1.5rem;
    font-weight: 700;
    color: ${theme.colors.title};
    font-family: ${theme.fonts.base};
  `}
`;

export const SectionSeAll = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.125rem;
    line-height: 140%;
    font-weight: 400;
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.secondary};
    position: relative;
    transition: ${theme.transitions.preset.default};

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      background: ${theme.colors.primary};
      width: 0;
      height: 2px;
      transition: ${theme.transitions.preset.high};
    }

    &:hover::after {
      background-color: ${theme.colors.primary};
      width: 100%;
    }
  `}
`;

export const AirportListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;
