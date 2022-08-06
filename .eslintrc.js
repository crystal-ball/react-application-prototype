'use strict'

module.exports = {
  ignorePatterns: ['componentry.config.js', 'src/utils/setup-tracer.ts'],
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
    {
      files: ['src/theme/**/*.js'],
      parserOptions: {
        sourceType: 'script',
      },
      env: {
        node: true,
      },
    },
  ],
}
