import { createGlobalStyle } from 'styled-components';

import { MapboxControlsStyles, MapboxSearchBoxStyles } from './mapboxSearchBox';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.tertiary};
    color: ${({ theme }) => theme.colors.body};
    -webkit-font-smoothing: antialiased;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px  ${({ theme }) => theme.colors.primary};
  }
  
  button {
    cursor: pointer;
  }

  body, input, textarea, button {
    font-weight: 400;
    font-size: 1rem;
    font-family: ${({ theme }) => theme.fonts.base};
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

  ${MapboxSearchBoxStyles};
  ${MapboxControlsStyles};
`;
