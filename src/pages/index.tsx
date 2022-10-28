import type { NextPage } from 'next';

import { Header } from 'components/Header';
import { HomeContent } from 'contents/Home';
import { DefaultLayout } from 'layouts';

import { withSSRAuth, WithSSRAuthResult } from 'utils/withSSRAuth';

const Dashboard: NextPage<WithSSRAuthResult> = () => {
  return (
    <DefaultLayout contentHeader={<Header />} pageTitle="Dashboard | Fox Travels">
      <HomeContent />
    </DefaultLayout>
  );
};

export const getServerSideProps = withSSRAuth();
export default Dashboard;
