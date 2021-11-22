'use strict'

const { merge } = require('webpack-merge')

const common = require('./webpack/common-configs')
const development = require('./webpack/development-configs')
const production = require('./webpack/production-configs')

module.exports = function webpack() {
  return process.env.NODE_ENV === 'production'
    ? merge(common, production)
    : merge(common, development)
}
