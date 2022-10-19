import { useEffect } from 'react';

import type { NextPage } from 'next';

import { Loader } from 'components/Loader';
import { useMe } from 'graphql/generated/page.generated';
import AuthPage from 'pages/auth';
import { useAuthStore } from 'store/Authentication/Auth.store';

import { withApollo } from '../lib/withApollo';

export function withAuth(Component: NextPage) {
  const Auth: NextPage = (props) => {
    const { data, loading } = useMe();
    const { isAutenticated, updateSession } = useAuthStore();

    useEffect(() => {
      if (data?.me) updateSession(data.me);
    }, [data]);

    if (loading) return <Loader />;

    if (!isAutenticated) return <AuthPage />;

    if (Component.getInitialProps) Auth.getInitialProps = Component.getInitialProps;

    return <Component {...props} />;
  };

  return withApollo(Auth);
}
