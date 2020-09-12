'use strict'

const path = require('path')
const webpackBase = require('@crystal-ball/webpack-base')

const { loaders, plugins } = webpackBase({ target: 'storybook' })

module.exports = {
  stories: ['../src/**/*.stories.@(js|mdx)'],
  addons: [
    '@storybook/preset-scss',
    '@storybook/addon-essentials',
    '@storybook/addon-links',
  ],
  webpackFinal: async (config) => {
    /* eslint-disable no-param-reassign */

    // ℹ️ In app this is resolved by a Babel plugin, but for Storybook we're
    // using a webpack alias so we don't have to mess with its Babel configs
    config.resolve.alias['@'] = path.resolve(__dirname, '../src')

    // --- Loaders ---

    // Add loaders for 🔮 SVG sprite and component patterns
    config.module.rules = config.module.rules.concat([
      loaders.svgSpriteLoader,
      loaders.svgComponentLoader,
    ])

    // --- Plugins ---

    config.plugins = config.plugins.concat([plugins.svgSymbolSpritePlugin])

    return config
    /* eslint-enable no-param-reassign */
  },
}
