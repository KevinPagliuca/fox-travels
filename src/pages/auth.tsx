import type { NextPage } from 'next';

import { AuthContent } from 'contents/Auth';
import { PublicLayout } from 'layouts/PublicLayout';

const AuthPage: NextPage = () => {
  return (
    <PublicLayout>
      <AuthContent />
    </PublicLayout>
  );
};

export default AuthPage;
