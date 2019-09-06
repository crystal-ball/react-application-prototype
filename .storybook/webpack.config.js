const { resolve } = require('path')
const webpackBase = require('@crystal-ball/webpack-base')
const SVGSymbolSprite = require('svg-symbol-sprite-loader')

const { loaders } = webpackBase()

/**
 * Extend the default Storybook webpack configs to include project aliases,
 * additional loaders, etc.
 */
module.exports = ({ config /* , mode */ }) => {
  /* eslint-disable no-param-reassign */
  config.resolve.alias['@'] = resolve('src')

  // --- Loaders ---

  // Add loaders that are not included in default Storybook configs for SASS
  // and SVG assets
  config.module.rules = config.module.rules.concat([
    loaders.sassLoader,
    loaders.svgSpriteLoader,
    loaders.svgComponentLoader,
  ])

  // --- Plugins ---

  config.plugins = config.plugins.concat([
    // In storybook just generate an `icon-sprite.svg` asset file, don't inject
    // the sprite id into the document head (we call for the file every load)
    new SVGSymbolSprite.Plugin({
      filename: 'icon-sprite.svg',
      injectSpriteId: false,
    }),
  ])

  return config
  /* eslint-enable no-param-reassign */
}
