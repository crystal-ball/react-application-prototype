'use strict'

module.exports = {
  extends: 'eloquence/react',
  parserOptions: {
    // Project configure eslint-typescript
    project: ['./tsconfig.json', './cypress/tsconfig.json'],
  },

  rules: {
    // Enforce that testing library is used through utils/testing-library only
    'no-restricted-imports': ['error', { paths: ['@testing-library/react'] }],

    'import/order': [
      'error',
      {
        'pathGroups': [
          {
            pattern: '@/**',
            group: 'parent',
          },
        ],
        'groups': [
          'builtin',
          'external', // includes configured `import/external-module-folders`
          'internal', // includes configured `import/internal-regex`
          'parent',
          'sibling',
          'index',
          'unknown',
        ],

        // Currently not enforced... validate that alphabetize doesn't require mixing
        // within larger groups, eg node built-in and a node_module
        'alphabetize': {
          order: 'asc',
        },
        // Require a newline between builtins+external and source code modules.
        // Allow but don't require a newline inside groups
        'newlines-between': 'ignore',
      },
    ],
  },

  overrides: [
    {
      files: 'src/**/*.js',
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
  ],
}
