import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:3333/graphql',
  overwrite: true,
  generates: {
    './src/graphql/generated/graphql.tsx': {
      documents: './src/graphql/**/*.gql',
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        reactApolloVersion: 3,
        withHooks: true,
        withHOC: false,
        withComponent: false,
        exportFragmentSpreadSubTypes: true,
        documentMode: 'graphQLTag',
      },
    },
    './src/graphql/generated/page.tsx': {
      documents: './src/graphql/**/*.gql',
      plugins: ['graphql-codegen-apollo-next-ssr'],
      config: {
        reactApolloVersion: 3,
        withHooks: true,
        documentMode: 'external',
        importDocumentNodeExternallyFrom: './graphql',
        apolloClientInstanceImport: '../../lib/withApollo',
        contextType: 'ApolloClientContext',
        contextTypeRequired: true,
      },
      preset: 'import-types-preset',
      presetConfig: {
        typesPath: './graphql',
      },
    },
  },
};

export default config;
