import styled, { css } from 'styled-components';

import { InputFieldAttributes } from './Input.interfaces';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  flex: 1;
`;

export const InputLabel = styled.label`
  ${({ theme }) => css`
    font-size: 1rem;
    font-weight: 500;
    color: ${theme.colors.title};
  `}
`;

export const InputField = styled.input<InputFieldAttributes>`
  ${({ theme, hasError, hasValue }) => css`
    flex: 1;
    height: 100%;
    border: 0;
    outline: 0;
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    background: ${theme.colors.dark_blue};
    color: ${theme.colors.body};

    text-overflow: ellipsis;
    transition: ${theme.transitions.preset.default};

    &::placeholder {
      color: inherit;
    }

    &:focus {
      color: ${theme.colors.primary};
      box-shadow: 0 0 0 2px ${theme.colors.primary};
    }

    ${hasValue &&
    css`
      color: ${theme.colors.title};
    `};

    ${hasError &&
    css`
      color: ${theme.colors.error} !important;
      box-shadow: 0 0 0 2px ${theme.colors.error} !important;
    `}
  `}
`;

export const InputError = styled.span`
  ${({ theme }) => css`
    padding-left: 0.25rem;
    font-size: 0.875rem;
    line-height: 140%;
    font-family: ${theme.fonts.secondary};
    color: ${theme.colors.error};
  `}
`;
