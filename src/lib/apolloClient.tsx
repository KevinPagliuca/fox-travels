import type { GetServerSidePropsContext, NextPageContext } from 'next';

import {
  ApolloClient,
  createHttpLink,
  from,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client';
import { parseCookies } from 'nookies';
import { API_URL, APP_USER_TOKEN } from 'shared/constants';

import { WithSSRAuthResult } from 'utils/withSSRAuth';

export type WithApolloProps<T extends object = WithSSRAuthResult> = T & {
  apolloState?: NormalizedCacheObject;
};

export type ApolloClientContext = GetServerSidePropsContext | NextPageContext;

export function getApolloClient(ctx?: ApolloClientContext, ssrCache?: NormalizedCacheObject) {
  const { [APP_USER_TOKEN]: token } = parseCookies(ctx);

  const httpLink = createHttpLink({
    uri: API_URL,
    headers: {
      authorization: token ?? ''
    },
    fetch
  });

  const cache = new InMemoryCache().restore(ssrCache ?? {});

  return new ApolloClient({
    link: from([httpLink]),
    cache
  });
}
