import type { NextPage } from 'next';

import { useLoginPageStore } from 'store/pages/LoginPage';

import { AuthContent } from 'contents/Auth';
import { loginTabOptionsKeys } from 'contents/Auth/tabOptions';
import { PublicLayout } from 'layouts/PublicLayout';

import { withSSRPublic } from 'utils/withSSRAuth';

const AuthPage: NextPage = () => {
  const selectedTab = useLoginPageStore(state => state.selectedTab);
  const pageTitle = loginTabOptionsKeys[selectedTab] === 'login' ? 'Login' : 'Cadastro';
  return (
    <PublicLayout pageTitle={`${pageTitle} - Fox Travels`}>
      <AuthContent />
    </PublicLayout>
  );
};

export const getServerSideProps = withSSRPublic();
export default AuthPage;
AuthPage.displayName = 'AuthPage';
