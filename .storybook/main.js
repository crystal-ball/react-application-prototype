'use strict'

const webpackBase = require('@crystal-ball/webpack-base')
const { babelBase } = require('@crystal-ball/babel-base')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const { loaders, plugins } = webpackBase({ target: 'storybook' })

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../src/**/*.stories.@(js|mdx)'],
  addons: [
    '@storybook/preset-scss',
    '@storybook/addon-essentials',
    '@storybook/addon-links',
  ],
  babel: async () => babelBase({ env: process.env.NODE_ENV, target: 'react' }),
  webpackFinal: async (config) => {
    /* eslint-disable no-param-reassign */

    // --- Loaders ---

    // Add loaders for 🔮 SVG sprite and component patterns
    config.module.rules = config.module.rules.concat([
      loaders.svgSpriteLoader,
      loaders.svgComponentLoader,
    ])

    // --- Plugins ---

    if (process.env.NODE_ENV === 'development') {
      // Enable fast refresh in development
      config.plugins.push(new ReactRefreshWebpackPlugin())
    }

    config.plugins = config.plugins.concat([plugins.svgSymbolSpritePlugin])

    return config
    /* eslint-enable no-param-reassign */
  },
}
