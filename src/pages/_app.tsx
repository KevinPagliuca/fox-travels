import React from 'react';
import { ConfigProvider } from 'react-avatar';

import type { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/global';
import { theme } from 'styles/theme';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ConfigProvider colors={Object.values(theme.colors)}>
        <Component {...pageProps} />
      </ConfigProvider>
    </ThemeProvider>
  );
}
