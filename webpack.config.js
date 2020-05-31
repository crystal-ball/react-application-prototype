'use strict'

const path = require('path')
const sass = require('sass')
const webpackBase = require('@crystal-ball/webpack-base')
const { SassDimension } = require('node-sass-utils')(sass)

const theme = require('./src/theme/radical')

const packageJSON = require('./package.json')

/* eslint-disable */
function castToSass(jsValue) {
  if (jsValue && typeof jsValue.toSass === 'function') {
    // string -> unquoted string
    return jsValue.toSass()
  } else if (typeof jsValue === 'string') {
    // string -> unquoted string
    return new sass.types.String(jsValue)
  } else if (typeof jsValue === 'boolean') {
    // boolean -> boolean
    return jsValue ? sass.types.Boolean.TRUE : sass.types.Boolean.FALSE
  } else if (typeof jsValue === 'undefined' || jsValue === null) {
    // undefined/null -> null
    return sass.types.Null.NULL
  } else if (typeof jsValue === 'number') {
    // Js Number -> Unitless Number
    return new sass.types.Number(jsValue)
  } else if (jsValue && jsValue.constructor.name === 'Array') {
    // Array -> List
    var list = new sass.types.List(jsValue.length)
    for (var i = 0; i < jsValue.length; i++) {
      list.setValue(i, castToSass(jsValue[i]))
    }
    var isComma = typeof jsValue.separator === 'undefined' ? true : jsValue.separator
    list.setSeparator(isComma)
    return list
  } else if (jsValue && jsValue.constructor.name.indexOf('Sass') === 0) {
    // these are sass objects that we don't coerce
    return jsValue
  } else if (typeof jsValue === 'object') {
    var keys = []
    for (var k in jsValue) {
      if (jsValue.hasOwnProperty(k)) {
        keys[keys.length] = k
      }
    }
    var map = new sass.types.Map(keys.length)
    for (var m = 0; m < keys.length; m++) {
      var key = keys[m]
      map.setKey(m, new sass.types.String(key))
      map.setValue(m, castToSass(jsValue[key]))
    }
    return map
  } else {
    // WTF
    throw new Error("Don't know how to coerce: " + jsValue.toString())
  }
}
/* eslint-enable */

function convertDimension(str) {
  const dimensionsMatch = str.match(
    /^([0-9]+)(%|ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmax|vmin|vw)$/,
  )

  if (!dimensionsMatch) return castToSass(str)
  return new SassDimension(parseFloat(dimensionsMatch[1], 10), dimensionsMatch[2])
}

function themeAccessor(rawPath) {
  // Default value of null can't be checked with node-sass-utils isNull for some
  // reason... but it also doesn't have a getValue fn, which is how we know that
  // theme() was called with no path
  if (!rawPath.getValue) return castToSass(theme)

  const themePath = rawPath.getValue()
  const pathKeys = themePath.split('.')
  const themeValue = pathKeys.reduce((prev, curr) => prev[curr], theme)

  return typeof themeValue === 'string'
    ? convertDimension(themeValue)
    : castToSass(themeValue)
}

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
    paths: {
      iconSpriteIncludes: [
        path.resolve('src/media/icons'),
        path.resolve('node_modules/feather-icons/dist/icons'),
      ],
    },
    sassOptions: {
      functions: {
        'theme($theme-path: null)': themeAccessor,
      },
    },
  })

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
