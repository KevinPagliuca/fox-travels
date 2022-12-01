import { Copy, Pencil, Trash } from 'phosphor-react';

import { rgba } from 'polished';
import styled, { css } from 'styled-components';

import { Button } from 'components/Button';

export const LocationCardContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background: ${theme.colors.dark_blue};
    border-radius: 4px;
    overflow: hidden;
    padding: 1rem;
    gap: 1rem;
    width: 100%;
    max-width: 25rem;
    flex: 1;
    position: relative;
    transition: ${theme.transitions.preset.default};

    &:hover {
      box-shadow: 0 0 0 2px ${theme.colors.primary};
    }
  `}
`;

export const LocationCardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
`;

export const LocationPlaceName = styled.strong`
  ${({ theme }) => css`
    font-size: 1rem;
    font-family: ${theme.fonts.secondary};
    color: ${theme.colors.title};
    display: flex;
    align-items: center;
    gap: 1rem;
  `}
`;

export const LocationCityCountry = styled.span`
  ${({ theme }) => css`
    font-size: 1rem;
    font-family: ${theme.fonts.secondary};
    color: ${theme.colors.body};
  `}
`;

export const LocationCoordinates = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.title};
  gap: 0.25rem;
  margin-top: 1rem;
`;

export const CoordinateTitle = styled.span`
  ${({ theme }) => css`
    font-size: 1rem;
    font-weight: 500;
    font-family: ${theme.fonts.secondary};
    color: ${theme.colors.title};
  `}
`;

export const CoordinateText = styled.span`
  ${({ theme }) => css`
    font-size: 0.875rem;
    color: ${theme.colors.body};
  `}
`;

export const CardActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: absolute;
  background: ${({ theme }) => rgba(theme.colors.tertiary, 0.35)};
  inset: 0;
  opacity: 0;
  transition: all 0.3s linear;

  &:hover {
    opacity: 1;
    backdrop-filter: blur(1px);
  }
`;

export const ButtonAction = styled(Button).attrs({
  variant: 'unstyled'
})`
  &:focus {
    box-shadow: none;
  }
`;

const iconStyles = css`
  ${({ theme }) => css`
    color: ${theme.colors.tertiary};
    background: ${theme.colors.white};
    transition: ${theme.transitions.preset.default};
    border-radius: 8px;
    padding: 0.25rem;
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
    box-shadow: 0 0 4px 0 ${rgba(theme.colors.white, 0.5)};
    transition: all 0.3s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.tertiary};
      background: ${({ theme }) => theme.colors.primary};
    }
  `}
`;

export const EditIcon = styled(Pencil)`
  ${iconStyles};
`;

export const DeleteIcon = styled(Trash)`
  ${iconStyles};
`;

export const CopyIcon = styled(Copy)`
  ${iconStyles};
`;
