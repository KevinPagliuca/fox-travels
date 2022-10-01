import type { NextPage } from 'next';

import { Header } from 'components/Header';
import { HomeContent } from 'contents/Home';
import { withAuth } from 'HOC/withAuth';
import { DefaultLayout } from 'layouts';

const Home: NextPage = () => {
  return (
    <DefaultLayout contentHeader={<Header />}>
      <HomeContent />
    </DefaultLayout>
  );
};

export default withAuth(Home);
