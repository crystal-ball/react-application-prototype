'use strict'

const eloquence = require('eslint-config-eloquence')

module.exports = eloquence({
  target: 'react',
  // Force linting of dot files and directories; ignore build output
  ignorePatterns: ['!.*', 'public/*'],
})
