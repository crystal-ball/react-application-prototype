const { resolve } = require('path')
const webpackBase = require('@crystal-ball/webpack-base')

const featherIconsPath = resolve('node_modules/feather-icons/dist/icons')

const { loaders, plugins } = webpackBase({
  target: 'storybook',
  paths: {
    iconSpriteIncludes: [resolve('src/media/icons'), featherIconsPath],
  },
})

/**
 * Extend the default Storybook webpack configs to include project aliases,
 * additional loaders, etc.
 */
module.exports = ({ config: configs /* , mode */ }) => {
  /* eslint-disable no-param-reassign */
  configs.resolve.alias['@'] = resolve('src')
  configs.resolve.alias['feather-icons'] = featherIconsPath

  // --- Loaders ---

  // Add loaders that are not included in default Storybook configs for SASS
  // and SVG assets
  configs.module.rules = configs.module.rules.concat([
    loaders.sassLoader,
    loaders.svgSpriteLoader,
    loaders.svgComponentLoader,
  ])

  // --- Plugins ---

  configs.plugins = configs.plugins.concat([plugins.svgSymbolSpritePlugin])

  return configs
  /* eslint-enable no-param-reassign */
}
