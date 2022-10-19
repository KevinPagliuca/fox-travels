import { ThreeDots } from 'react-loader-spinner';

import styled, { css } from 'styled-components';

import { ButtonAttributes, ButtonVariantType } from './Button.interface';

const DefaultButton = styled.button<ButtonAttributes>`
  ${({ theme }) => css`
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
    font-weight: 700;
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
      box-shadow: inset 0 0 0 2px ${theme.colors.secondary_light};
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

export const Buttons: Record<ButtonVariantType, typeof DefaultButton> = {
  primary: PrimaryButton,
  secondary: SecondaryButton,
  tertiary: TertiaryButton,
};

export const LoaderStyled = styled(ThreeDots)``;
