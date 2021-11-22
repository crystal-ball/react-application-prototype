'use strict'

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

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
  // babel: async () => {},
  webpackFinal: async (config) => {
    /* eslint-disable no-param-reassign */

    // --- Loaders ---

    // Add loaders for 🔮 SVG sprite and component patterns
    config.module.rules = config.module.rules.concat([
      // loaders.svgSpriteLoader,
      // loaders.svgComponentLoader,
    ])

    // --- Plugins ---

    if (process.env.NODE_ENV === 'development') {
      // Enable fast refresh in development
      config.plugins.push(new ReactRefreshWebpackPlugin())
    }

    // config.plugins = config.plugins.concat([plugins.svgSymbolSpritePlugin])

    return config
    /* eslint-enable no-param-reassign */
  },
}
