import { css } from 'styled-components';

export const ScrollStyles = css`
  ::-webkit-scrollbar {
    width: 6px;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.dark_blue};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 4px;

    &:active {
      background: ${({ theme }) => theme.colors.title};
    }
  }
`;
