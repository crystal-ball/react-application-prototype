/* eslint-env node */
/* eslint-disable import/no-extraneous-dependencies */

const path = require('path')
const webpackBase = require('@crystal-ball/webpack-base')

/*
 * 📦 Single webpack configuration file handles different environment build
 * targets by using webpack-base to merge configurations common to all
 * environments with configurations unique to targeted environment.
 *
 * 📝 https://github.com/crystal-ball/webpack-base
 */
module.exports = () => {
  const featherIconsPath = path.resolve('node_modules/feather-icons/dist/icons')

  /*
   * Generate the base configuration object by passing the environment flags and
   * optional options object available for customizing the standard project
   * conventions.
   */
  const { configs } = webpackBase({
    envVars: { PACKAGE_VERSION: '0.0.0' },
    paths: {
      iconSpriteIncludes: [path.resolve('src/media/icons'), featherIconsPath],
    },
  })

  /*
   * Handle non-standard, advanced project customization by directly updating
   * the generated base configs.
   */

  // Enable simple imports for Feather icons
  configs.resolve.alias['feather-icons'] = featherIconsPath

  // During development use the RHL patched version of react-dom
  if (process.env.NODE_ENV === 'development') {
    configs.resolve.alias['react-dom'] = '@hot-loader/react-dom'
  }

  return configs
}
