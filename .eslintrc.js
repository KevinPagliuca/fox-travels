/* eslint-disable @typescript-eslint/no-var-requires */
const config = require('nextjs-best-eslint-config/nextjs');

module.exports = {
  ...config,
  ignorePatterns: ['src/**/generated/*.generated.tsx'],
  rules: {
    ...config.rules,
    'react-hooks/exhaustive-deps': 'off',
    'react/display-name': 'off',
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          ['/react/', '/^react/'],
          ['/^next/', '/^graphql/'],
          'module',
          ['/^components/', '/^contents/', '/^layouts/', '/^lib/'],
          ['/^hooks/', '/^interfaces/', '/helpers/', '/^utils/', '/^services/'],
          ['parent', 'sibling', 'index', '/^styles/']
        ],
        alphabetize: { order: 'asc', ignoreCase: true }
      }
    ]
  }
};
