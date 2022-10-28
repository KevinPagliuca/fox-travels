import * as Types from './graphql.generated';

import * as Operations from './graphql.generated';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router';
import { QueryHookOptions, useQuery } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type React from 'react';
import { getApolloClient, ApolloClientContext } from '../../lib/apolloClient';

export async function getServerPageGetAllUsers(
  options: Omit<Apollo.QueryOptions<Types.GetAllUsersQueryVariables>, 'query'>,
  ctx: ApolloClientContext
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.GetAllUsersQuery>({
    ...options,
    query: Operations.GetAllUsersDocument
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null
    }
  };
}
export const useGetAllUsers = (
  optionsFunc?: (
    router: NextRouter
  ) => QueryHookOptions<Types.GetAllUsersQuery, Types.GetAllUsersQueryVariables>
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetAllUsersDocument, options);
};
export type PageGetAllUsersComp = React.FC<{
  data?: Types.GetAllUsersQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageGetAllUsers =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<Types.GetAllUsersQuery, Types.GetAllUsersQueryVariables>
  ) =>
  (WrappedComponent: PageGetAllUsersComp): NextPage =>
  props => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.GetAllUsersDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrGetAllUsers = {
  getServerPage: getServerPageGetAllUsers,
  withPage: withPageGetAllUsers,
  usePage: useGetAllUsers
};
export async function getServerPageMe(
  options: Omit<Apollo.QueryOptions<Types.MeQueryVariables>, 'query'>,
  ctx: ApolloClientContext
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.MeQuery>({
    ...options,
    query: Operations.MeDocument
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null
    }
  };
}
export const useMe = (
  optionsFunc?: (router: NextRouter) => QueryHookOptions<Types.MeQuery, Types.MeQueryVariables>
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.MeDocument, options);
};
export type PageMeComp = React.FC<{ data?: Types.MeQuery; error?: Apollo.ApolloError }>;
export const withPageMe =
  (optionsFunc?: (router: NextRouter) => QueryHookOptions<Types.MeQuery, Types.MeQueryVariables>) =>
  (WrappedComponent: PageMeComp): NextPage =>
  props => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.MeDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrMe = {
  getServerPage: getServerPageMe,
  withPage: withPageMe,
  usePage: useMe
};
