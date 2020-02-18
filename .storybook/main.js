'use strict'

const { resolve } = require('path')
const webpackBase = require('@crystal-ball/webpack-base')

const featherIconsPath = resolve('node_modules/feather-icons/dist/icons')

const { loaders, plugins } = webpackBase({
  target: 'storybook',
  paths: {
    iconSpriteIncludes: [resolve('src/media/icons'), featherIconsPath],
  },
})

module.exports = {
  stories: ['../src/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@storybook/addon-links',
    '@storybook/addon-docs',
  ],
  webpackFinal: async config => {
    /* eslint-disable no-param-reassign */
    config.resolve.alias['@'] = resolve('src')
    config.resolve.alias['feather-icons'] = featherIconsPath

    // --- Loaders ---

    // Add loaders that are not included in default Storybook configs for SASS
    // and SVG assets
    config.module.rules = config.module.rules.concat([
      loaders.sassLoader,
      loaders.svgSpriteLoader,
      loaders.svgComponentLoader,
    ])

    // --- Plugins ---

    config.plugins = config.plugins.concat([plugins.svgSymbolSpritePlugin])

    return config
    /* eslint-enable no-param-reassign */
  },
}
