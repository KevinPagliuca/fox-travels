import type { NextPage } from 'next';

import { Header } from 'components/Header';
import { HomeContent } from 'contents/Home/Home';
import { DefaultDashboardLayout } from 'layouts';

const Home: NextPage = () => {
  return (
    <DefaultDashboardLayout contentHeader={<Header />}>
      <HomeContent />
    </DefaultDashboardLayout>
  );
};

export default Home;
