import type { NextPage } from 'next';

import { AuthContent } from 'contents/Auth';
import { PublicLayout } from 'layouts/PublicLayout';
import { withApollo } from 'lib/withApollo';

const AuthPage: NextPage = () => {
  return (
    <PublicLayout>
      <AuthContent />
    </PublicLayout>
  );
};

export default withApollo(AuthPage);
