import type { GetServerSideProps, NextPage } from 'next';

import { ContentManagementContent } from 'contents/ContentManagement';
import { DefaultLayout } from 'layouts';

import { withSSRAuth } from 'utils/withSSRAuth';

const ContentManagementPage: NextPage = () => {
  return (
    <DefaultLayout pageTitle="Gestão de conteúdo - Fox Travels">
      <ContentManagementContent />
    </DefaultLayout>
  );
};

export const getServerSideProps: GetServerSideProps = withSSRAuth();

export default ContentManagementPage;
ContentManagementPage.displayName = 'ContentManagementPage';
