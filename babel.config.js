'use strict'

const babelBase = require('@crystal-ball/babel-base').default

module.exports = function babelConfigs(api) {
  const configs = babelBase({ env: api.env, target: 'react' })

  configs.env.cypress = {
    plugins: ['istanbul'],
  }

  return configs
}
