'use strict'

const { babelBase } = require('@crystal-ball/babel-base')

module.exports = function babelConfigs(api) {
  api.cache(() => process.env.NODE_ENV)

  const configs = babelBase({ env: process.env.NODE_ENV, target: 'react' })

  // --------------------------------------------------------
  // Application config customizations

  // Setup `instrument` env for collecting code coverage in Cypress
  configs.env.instrument = {
    plugins: ['istanbul'],
  }

  return configs
}
