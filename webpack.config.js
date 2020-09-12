'use strict'

const webpackBase = require('@crystal-ball/webpack-base')

const { themeAccessor } = require('./webpack/theme-accessor')
const packageJSON = require('./package.json')

/*
 * Generate the base configuration object by passing the environment flags and
 * optional options object available for customizing the standard project
 * conventions.
 * 📝 https://github.com/crystal-ball/webpack-base
 */

const { configs } = webpackBase({
  envVars: {
    PACKAGE_VERSION: packageJSON.version,
    APPLICATION_DEPENDENCIES: JSON.stringify(
      Object.entries(packageJSON.dependencies).map((pkg) => {
        const [name, version] = pkg
        return {
          id: `${name}@${version}`,
          name,
          version,
        }
      }),
    ),
  },
  sassOptions: {
    functions: {
      'theme($theme-path: null)': themeAccessor,
    },
  },
})

// --------------------------------------------------------
// Advanced config customizations

// During development use the RHL patched version of react-dom
if (process.env.NODE_ENV === 'development') {
  configs.resolve.alias['react-dom'] = '@hot-loader/react-dom'
}

module.exports = configs
