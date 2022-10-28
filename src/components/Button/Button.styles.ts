import { ThreeDots } from 'react-loader-spinner';

import { lighten } from 'polished';
import styled, { css } from 'styled-components';

import { ButtonAttributes, ButtonVariantType } from './Button.interface';

const DefaultButton = styled.button<ButtonAttributes>`
  ${({ theme, fontWeight = '700', fullWidth }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 1rem;
    border-radius: 4px;
    border: 0;
    outline: 0;
    max-height: 2.5rem;
    height: 100%;

    font-size: 1rem;
    font-weight: ${fontWeight};
    font-family: ${theme.fonts.secondary};
    transition: ${theme.transitions.preset.default};

    &:disabled {
      cursor: not-allowed !important;
      opacity: 0.8;
    }

    .buttonLoader {
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        width: 60%;
        height: 60%;
      }
    }

    ${fullWidth &&
    css`
      width: 100%;
    `}
  `}
`;

const PrimaryButton = styled(DefaultButton)`
  ${({ theme }) => css`
    color: ${theme.colors.dark_blue};
    background: ${theme.colors.primary};

    &:not(:disabled):hover,
    &:not(:disabled):active {
      background: ${theme.colors.primary_dark};
      color: ${theme.colors.dark_blue};
    }

    &:not(:disabled):focus {
      box-shadow: inset 0 0 0 2px ${theme.colors.secondary};
    }
  `}
`;

const SecondaryButton = styled(DefaultButton)`
  color: ${({ theme }) => theme.colors.dark_blue};
  background: ${({ theme }) => theme.colors.secondary};
`;

const TertiaryButton = styled(DefaultButton)`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.tertiary};
`;

const DarkblueButton = styled(DefaultButton)`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    background: ${theme.colors.dark_blue};

    &:not(:disabled):hover,
    &:not(:disabled):active {
      color: ${theme.colors.white};
      background: ${lighten(0.05, theme.colors.dark_blue)};
    }

    &:not(:disabled):focus {
      box-shadow: inset 0 0 0 2px ${theme.colors.white};
    }
  `}
`;

const UnstyledButton = styled.button`
  ${({ theme }) => css`
    border: unset;
    background: unset;
    color: unset;
    transition: ${theme.transitions.preset.default};
  `}
`;

export const Buttons: Record<ButtonVariantType, typeof DefaultButton> = {
  primary: PrimaryButton,
  secondary: SecondaryButton,
  tertiary: TertiaryButton,
  darkblue: DarkblueButton,
  unstyled: UnstyledButton
};

export const LoaderStyled = styled(ThreeDots)``;
