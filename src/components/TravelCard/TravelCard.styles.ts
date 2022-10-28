import Image from 'next/image';

import { lighten } from 'polished';
import styled, { css } from 'styled-components';

import {
  TravelCardFooterAttributes,
  TravelCardOrientationAttributes
} from './TravelCard.interfaces';

export const TravelCardContainer = styled.div<TravelCardOrientationAttributes>`
  ${({ theme, orientation }) => css`
    background: ${theme.colors.dark_blue};
    border-radius: 24px;
    overflow: hidden;
    display: flex;
    padding: 0.5rem;
    transition: ${theme.transitions.preset.default};

    &:hover {
      box-shadow: 0 0 0 2px ${theme.colors.primary};
    }

    ${orientation === 'landscape' &&
    css`
      gap: 1rem;
      flex-direction: column;
      width: 100%;
      min-width: 15rem;
      max-width: 16.75rem;
    `}

    ${orientation === 'portrait' &&
    css`
      flex-direction: row;
      padding: 1rem;
      max-width: 23rem;
      max-height: 9rem;
      width: 100%;
    `}
  `}
`;

export const TravelCardImageContainer = styled.div<TravelCardOrientationAttributes>`
  ${({ orientation }) => css`
    display: flex;
    ${orientation === 'landscape' &&
    css`
      width: 100%;
      flex: 1;

      > span {
        flex: 1;
        min-height: 10.5rem;
        position: relative;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      }
    `}

    ${orientation === 'portrait' &&
    css`
      height: 100%;
    > span {
      width: 7rem;
      height: 7rem;
      position: relative;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    `}
  `}
`;

export const TravelCardImage = styled(Image)`
  border-radius: 24px;
  background: ${({ theme }) => theme.colors.tertiary};
`;

export const TravelCardTitle = styled.h4<TravelCardOrientationAttributes>`
  ${({ orientation, theme }) => css`
    font-size: 1.25rem;
    color: ${theme.colors.title};
    font-weight: 700;

    ${orientation === 'landscape' &&
    css`
      padding-left: 0.5rem;
    `}
  `}
`;

export const TravelCardContent = styled.div<TravelCardOrientationAttributes>`
  ${({ orientation }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;

    ${orientation === 'portrait' &&
    css`
      gap: 0;
      margin-left: 1rem;
    `}

    > span {
      margin-top: 0.5rem;
      margin-bottom: 1rem;
    }
  `}
`;

export const TravelCardFooter = styled.div<TravelCardFooterAttributes>`
  ${({ theme, isPromotion, orientation }) => css`
    display: flex;
    align-items: center;

    ${orientation === 'landscape' &&
    css`
      padding: 1rem;
      margin: 0 -0.5rem -0.5rem;
      background: ${isPromotion ? theme.colors.primary : 'transparent'};
      color: ${isPromotion ? theme.colors.tertiary : theme.colors.body};
      justify-content: space-between;
      gap: 0.5rem;
      border-top: ${isPromotion ? 'none' : `2px solid ${lighten(0.1, theme.colors.dark_blue)}`};

      > span {
        font-size: 0.875rem;
        font-weight: 400;
      }

      > strong {
        font-size: 1.125rem;
        font-weight: 700;
        color: ${isPromotion ? theme.colors.tertiary : theme.colors.title};
      }
    `}

    ${orientation === 'portrait' &&
    css`
      align-items: center;
      gap: 0.5rem;
      width: 100%;

      > span {
        font-size: 0.875rem;
        font-weight: 400;
        order: 1;
      }

      > strong {
        font-size: 1.125rem;
        font-weight: 700;
        color: ${theme.colors.primary};
        order: 0;
      }
    `}
  `}
`;
