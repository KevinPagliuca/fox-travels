import 'react-toastify/dist/ReactToastify.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import 'mapbox-gl/dist/mapbox-gl.css';

import React from 'react';
import { ConfigProvider } from 'react-avatar';
import { ToastContainer } from 'react-toastify';

import type { AppProps } from 'next/app';

import { ApolloProvider } from '@apollo/client';
import { AuthStoreProvider } from 'store/Authentication';
import { ThemeProvider } from 'styled-components';

import { getApolloClient, WithApolloProps } from 'lib/apolloClient';

import { useCreateAuthStore } from 'hooks/useCreateAuthStore';

import { GlobalStyle } from 'styles/global';
import { theme } from 'styles/theme';

export default function MyApp({ Component, pageProps }: AppProps<WithApolloProps>) {
  const createStore = useCreateAuthStore({
    isAutenticated: true,
    token: pageProps?.authResult?.token,
    user: {
      id: pageProps?.authResult?.user.id,
      email: pageProps?.authResult?.user.email,
      name: pageProps?.authResult?.user.name,
      isAdmin: pageProps?.authResult?.user.isAdmin
    }
  });

  return (
    <AuthStoreProvider createStore={createStore}>
      <ApolloProvider client={getApolloClient(undefined, pageProps?.apolloState)}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <ToastContainer theme="dark" />
          <ConfigProvider colors={Object.values(theme.colors)}>
            <Component {...pageProps} />
          </ConfigProvider>
        </ThemeProvider>
      </ApolloProvider>
    </AuthStoreProvider>
  );
}
