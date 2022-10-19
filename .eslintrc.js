/* eslint-disable @typescript-eslint/no-var-requires */
const config = require('nextjs-best-eslint-config/nextjs');

module.exports = {
  ...config,
  rules: {
    ...config.rules,
    'react-hooks/exhaustive-deps': 'off',
    'react/display-name': 'off',
  },
};
