import { GraphQLError } from 'graphql';
import { MeQuery } from 'graphql/generated/graphql.generated';
import { getServerPageMe } from 'graphql/generated/page.generated';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';

import { ApolloError, NormalizedCacheObject } from '@apollo/client';
import { destroyCookie, parseCookies } from 'nookies';
import { APP_USER_TOKEN } from 'shared/constants';

export type WithSSRAuthResult = {
  authResult: MeQuery['me'];
  apolloState: NormalizedCacheObject;
  error: ApolloError | readonly GraphQLError[] | null;
};

const debug = false;

export function withSSRAuth() {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<WithSSRAuthResult | Record<string, unknown>>> => {
    const { [APP_USER_TOKEN]: token } = parseCookies(ctx);

    if (!token && ctx.resolvedUrl !== '/login') {
      return {
        redirect: {
          destination: '/login',
          permanent: false
        }
      };
    }

    try {
      // eslint-disable-next-line no-console
      if (debug) console.log('Getting SSR Auth user');
      const { props } = await getServerPageMe({}, ctx);

      return {
        props: {
          apolloState: props.apolloState,
          error: props.error,
          authResult: props.data.me
        }
      };
    } catch (error) {
      // eslint-disable-next-line no-console
      if (debug) console.log('Error when getting SSR Auth user');
      destroyCookie(ctx, APP_USER_TOKEN);
      return {
        redirect: {
          destination: '/login',
          permanent: false
        }
      };
    }
  };
}

export function withSSRPublic() {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<Record<string, unknown>>> => {
    const { [APP_USER_TOKEN]: token } = parseCookies(ctx);

    if (token && ctx.resolvedUrl === '/login') {
      return {
        redirect: {
          destination: '/',
          permanent: false
        }
      };
    }

    return {
      props: {}
    };
  };
}
