'use strict'

const webpackBase = require('@crystal-ball/webpack-base')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const { themeAccessor } = require('./webpack/theme-accessor')

const cssLoader = {
  loader: 'css-loader',
  options: { sourceMap: true },
}

const postCSSLoader = {
  loader: 'postcss-loader',
  options: { sourceMap: true },
}

/*
 * Generate the base configuration object by passing the environment flags and
 * optional options object available for customizing the standard project
 * conventions.
 * 📝 https://github.com/crystal-ball/webpack-base
 */

const { configs } = webpackBase({
  envVars: {
    LS_ACCESS_TOKEN: process.env.LS_ACCESS_TOKEN || '',
    RELEASE_VERSION: (process.env.VERCEL_GITHUB_COMMIT_SHA || '').slice(0, 7),
  },
  sassOptions: {
    functions: {
      'theme($theme-path: null)': themeAccessor,
    },
  },
})

// --------------------------------------------------------
// Tailwind support

configs.module.rules.push({
  test: /\.css$/,
  use:
    process.env.NODE_ENV === 'production'
      ? [MiniCssExtractPlugin.loader, cssLoader, postCSSLoader]
      : [{ loader: 'style-loader' }, cssLoader, postCSSLoader],
})

// --------------------------------------------------------
// Application config customizations

if (process.env.NODE_ENV === 'development') {
  // Enable fast refresh in development
  configs.plugins.push(new ReactRefreshWebpackPlugin())
}

// Copy the package.json to the static directory for easy fetch demo
configs.plugins.push(
  new CopyPlugin({
    patterns: [{ from: './package.json', to: 'static/json/package.json' }],
  }),
)

module.exports = configs
