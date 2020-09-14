'use strict'

const babelBase = require('@crystal-ball/babel-base').default

module.exports = function babelConfigs(api) {
  const configs = babelBase({ env: api.env, target: 'react' })

  /**
   * Target environment for collecting code coverage against the application
   */
  configs.env.instrument = {
    plugins: ['istanbul'],
  }

  return configs
}
