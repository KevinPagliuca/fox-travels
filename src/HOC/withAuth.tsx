import { useEffect, useState } from 'react';

import type { NextPage } from 'next';

import AuthPage from 'pages/auth';
import { useAuthStore } from 'store/Auth.store';

export function withAuth(Component: NextPage) {
  const Auth: NextPage = (props) => {
    const { isAutenticated } = useAuthStore();
    const [loading, setLoading] = useState(true);

    useEffect(() => setLoading(false), []);

    if (!isAutenticated || loading) return <AuthPage />;

    if (Component.getInitialProps) Auth.getInitialProps = Component.getInitialProps;

    return <Component {...props} />;
  };

  return Auth;
}
