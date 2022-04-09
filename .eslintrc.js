'use strict'

module.exports = {
  extends: 'eloquence/react',
  rules: {
    // Enforce that testing library is used through utils/testing-library only
    'no-restricted-imports': ['error', { paths: ['@testing-library/react'] }],
  },

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['tsconfig.json', 'cypress/tsconfig.json'],
      },
    },
  ],
}
