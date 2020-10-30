'use strict'

const babelBase = require('@crystal-ball/babel-base').default

module.exports = function babelConfigs(api) {
  api.cache(() => process.env.NODE_ENV)

  const configs = babelBase({ env: process.env.NODE_ENV, target: 'react' })

  /**
   * Target environment for collecting code coverage against the application
   */
  configs.env.instrument = {
    plugins: ['istanbul'],
  }

  return configs
}
