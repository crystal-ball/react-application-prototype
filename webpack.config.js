'use strict'

const path = require('path')
const webpackBase = require('@crystal-ball/webpack-base')

const packageJSON = require('./package.json')

/*
 * 📦 Single webpack configuration file handles different environment build
 * targets by using webpack-base to merge configurations common to all
 * environments with configurations unique to targeted environment.
 *
 * 📝 https://github.com/crystal-ball/webpack-base
 */
module.exports = () => {
  /*
   * Generate the base configuration object by passing the environment flags and
   * optional options object available for customizing the standard project
   * conventions.
   */
  const { configs } = webpackBase({
    envVars: {
      PACKAGE_VERSION: packageJSON.version,
      APPLICATION_DEPENDENCIES: JSON.stringify(
        Object.entries(packageJSON.dependencies).map(pkg => {
          const [name, version] = pkg
          return {
            id: `${name}@${version}`,
            name,
            version,
          }
        }),
      ),
    },
    paths: {
      iconSpriteIncludes: [
        path.resolve('src/media/icons'),
        path.resolve('node_modules/feather-icons/dist/icons'),
      ],
    },
  })

  configs.resolve.alias = {
    // Ensure that only one @babel/runtime is bundled into application
    '@babel/runtime': path.resolve(__dirname, 'node_modules/@babel/runtime'),
  }

  /*
   * Handle non-standard, advanced project customization by directly updating
   * the generated base configs.
   */

  // During development use the RHL patched version of react-dom
  if (process.env.NODE_ENV === 'development') {
    configs.resolve.alias['react-dom'] = '@hot-loader/react-dom'
  }

  return configs
}
