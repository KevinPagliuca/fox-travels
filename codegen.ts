import { CodegenConfig } from '@graphql-codegen/cli';

import { API_URL } from './src/shared/constants';

const config: CodegenConfig = {
  schema: API_URL,
  overwrite: true,
  hooks: {
    afterAllFileWrite: ['eslint --fix'],
  },
  generates: {
    './src/graphql/generated/graphql.generated.tsx': {
      documents: './src/graphql/**/*.gql',
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        reactApolloVersion: 3,
        withHooks: true,
        withHOC: false,
        withComponent: false,
        eslint: false,
        exportFragmentSpreadSubTypes: true,
        documentMode: 'graphQLTag',
      },
    },
    './src/graphql/generated/page.generated.tsx': {
      documents: './src/graphql/**/*.gql',
      plugins: ['graphql-codegen-apollo-next-ssr'],
      config: {
        reactApolloVersion: 3,
        withHooks: true,
        documentMode: 'external',
        importDocumentNodeExternallyFrom: './graphql.generated',
        apolloClientInstanceImport: '../../lib/withApollo',
        contextType: 'ApolloClientContext',
        eslint: false,
        contextTypeRequired: true,
      },
      preset: 'import-types-preset',
      presetConfig: {
        typesPath: './graphql.generated',
      },
    },
  },
};

export default config;
