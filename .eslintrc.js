'use strict'

const eloquence = require('eslint-config-eloquence')

module.exports = eloquence({
  target: 'react',
  tsconfigs: ['./tsconfig.json', './cypress/tsconfig.json'],
  enableMDX: true,
  rules: {
    // Enforce that testing library is used through utils/testing-library only
    'no-restricted-imports': ['error', { paths: ['@testing-library/react'] }],
  },
})
