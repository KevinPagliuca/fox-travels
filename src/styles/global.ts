import { createGlobalStyle } from 'styled-components';

import { logoAnimation } from './logoAnimation';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.base};
  }

  body {
    background: ${({ theme }) => theme.colors.tertiary};
    color: ${({ theme }) => theme.colors.body};
  }
  
  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    font-family: inherit;
    color: inherit;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  ${logoAnimation}; 
  
`;
