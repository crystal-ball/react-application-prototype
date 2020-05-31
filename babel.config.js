'use strict'

const babelBase = require('@crystal-ball/babel-base').default

module.exports = function babelConfigs(api) {
  return babelBase({ env: api.env, target: 'react' })
}
