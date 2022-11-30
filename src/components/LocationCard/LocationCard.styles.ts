import { Pencil, Trash, ArrowSquareIn } from 'phosphor-react';

import { transparentize } from 'polished';
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
    transition: ${theme.transitions.preset.default};
    gap: 1rem;
    width: 100%;
    position: relative;

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
  background: ${({ theme }) => transparentize(0.35, theme.colors.tertiary)};
  inset: 0;
  opacity: 0;
  transition: all 0.3s linear;

  &:hover {
    opacity: 1;
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
    color: ${theme.colors.title};
    transition: ${theme.transitions.preset.default};
    cursor: pointer;
  `}
`;

export const EditIcon = styled(Pencil)`
  ${iconStyles}

  &:hover {
    color: ${({ theme }) => theme.colors.warning};
  }
`;

export const DeleteIcon = styled(Trash)`
  ${iconStyles}

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const OpenLinkIcon = styled(ArrowSquareIn)`
  ${iconStyles}

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
