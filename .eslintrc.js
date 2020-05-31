'use strict'

const eloquence = require('eslint-config-eloquence')

const configs = eloquence({ target: 'react' })

configs.overrides[0].rules['import/no-unused-modules'] = 'off'

module.exports = configs
