import styled, { css } from 'styled-components';

export const LoginTabContainer = styled.form`
  display: flex;
  flex-direction: column;

  &:focus {
    box-shadow: none;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const underlineStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover::after,
  &:focus::after {
    width: 100%;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    background: ${({ theme }) => theme.colors.primary};
    width: 0;
    height: 2px;
    transition: ${({ theme }) => theme.transitions.preset.high};
  }
`;

export const ForgotPassword = styled.button`
  margin: 0.5rem 0 0.5rem auto;
  font-size: 0.875rem;
  line-height: 160%;
  color: ${({ theme }) => theme.colors.body};
  transition: ${({ theme }) => theme.transitions.preset.default};
  border: 0;
  background: transparent;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.title};
    box-shadow: none;
  }

  ${underlineStyle};
`;

export const LoginButton = styled.button`
  ${({ theme }) => css`
    margin-top: 1rem;
    height: 100%;
    border: 0;
    background: ${theme.colors.primary};
    color: ${theme.colors.dark_blue};
    padding: 0 1.5rem;
    font-size: 1rem;
    font-weight: 700;
    border-radius: 4px;
    transition: ${theme.transitions.preset.default};
    border: 2px solid transparent;

    &:active,
    &:hover,
    &:focus {
      background: ${theme.colors.primary_dark};
      box-shadow: none;
    }
  `}
`;

export const RegisterButton = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  color: ${({ theme }) => theme.colors.body};
  font-size: 0.875rem;

  button {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.title};
    background: transparent;

    border: 0;
    font-size: inherit;
    transition: ${({ theme }) => theme.transitions.preset.default};

    ${underlineStyle};

    &:focus,
    &:hover {
      box-shadow: none;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
