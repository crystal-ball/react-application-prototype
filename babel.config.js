'use strict'

const babelBase = require('@crystal-ball/babel-base').default

module.exports = function babelConfigs(api) {
  const base = babelBase({ env: api.env, target: 'react' })
  base.presets.push('@emotion/babel-preset-css-prop')
  return base
}
