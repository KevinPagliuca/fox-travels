import styled, { css } from 'styled-components';

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

export const InputField = styled.input`
  flex: 1;
  height: 100%;
  border: 0;
  outline: 0;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.dark_blue};
  color: ${({ theme }) => theme.colors.body};

  text-overflow: ellipsis;
  transition: ${({ theme }) => theme.transitions.preset.default};

  &::placeholder {
    color: inherit;
  }

  &:focus {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
