'use strict'

const eloquence = require('eslint-config-eloquence')

const configs = eloquence({ target: 'react' })
configs.ignorePatterns = ['!.*', 'public/*']

module.exports = configs
