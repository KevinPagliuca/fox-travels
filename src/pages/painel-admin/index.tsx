import type { NextPage } from 'next';

import { AdminPanelContent } from 'contents/AdminPanel';
import { DefaultLayout } from 'layouts';

import { withSSRAuth } from 'utils/withSSRAuth';

const AdminPanel: NextPage = () => {
  return (
    <DefaultLayout pageTitle="Painel Administrador - Fox Travels">
      <AdminPanelContent />
    </DefaultLayout>
  );
};

export const getServerSideProps = withSSRAuth();
export default AdminPanel;
