/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextPage, GetServerSidePropsContext } from 'next';

import {
  ApolloClient,
  createHttpLink,
  from,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import { parseCookies } from 'nookies';
import { APP_USER_TOKEN } from 'shared/constants';

export function withApollo(Component: NextPage) {
  return function Provider(props: any) {
    return (
      <ApolloProvider client={getApolloClient(undefined, props.apolloState)}>
        <Component {...props} />
      </ApolloProvider>
    );
  };
}

export type ApolloClientContext = GetServerSidePropsContext;

export function getApolloClient(ctx?: ApolloClientContext, ssrCache?: NormalizedCacheObject) {
  const { [APP_USER_TOKEN]: token } = parseCookies(ctx);

  const httpLink = createHttpLink({
    uri: 'http://localhost:3333/graphql',
    headers: {
      authorization: token ?? '',
    },
    fetch,
  });

  const cache = new InMemoryCache().restore(ssrCache ?? {});

  return new ApolloClient({
    link: from([httpLink]),
    cache,
  });
}
