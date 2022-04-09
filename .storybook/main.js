/* eslint-disable no-param-reassign */

'use strict'

const fs = require('fs')
const path = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const SVGSymbolSprite = require('svg-symbol-sprite-loader')

const { themeAccessor } = require('../webpack/theme-accessor')

const context = fs.realpathSync(process.cwd())

module.exports = {
  core: {
    builder: 'webpack5',
  },
  // https://storybook.js.org/docs/react/workflows/faq#how-do-i-setup-react-fast-refresh-with-storybook
  reactOptions: {
    fastRefresh: true,
  },
  addons: ['@storybook/addon-essentials', '@storybook/addon-links'],
  stories: ['../src/**/*.stories.@(js|mdx)'],
  babel: async (options) => {
    options.plugins.push([
      'babel-plugin-transform-import-aliases',
      { aliases: { '@': path.resolve(context, 'src') } },
    ])
    return options
  },
  webpackFinal: async (config, { configType }) => {
    const isProduction = configType === 'PRODUCTION'
    const iconSpriteIncludePath = path.join(context, 'src/media/icons')

    // Add loaders for 🔮 SVG sprite and component patterns
    config.module.rules = [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: isProduction,
              modules: {
                mode: 'global',
                localIdentName: '[name]-[local]--[hash:5]',
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: isProduction },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isProduction,
              sassOptions: {
                functions: {
                  'theme($theme-path: null)': themeAccessor,
                },
              },
            },
          },
        ],
      },
      // --- 📦 SVG icon sprite loader
      // Create an svg sprite with any icons imported into app
      {
        test: /\.svg$/,
        include: iconSpriteIncludePath,
        use: [{ loader: 'svg-symbol-sprite-loader' }],
      },

      // --- 👾 SVG to React Loader
      // Imported SVGs are converted to React components
      {
        test: /\.svg$/,
        // Make sure that we don't try to use with icons for svg sprite
        exclude: iconSpriteIncludePath,
        use: [
          {
            loader: '@svgr/webpack',
            // For some reason svgr configures svgo to strip out `viewbox` attrs
            // which makes it impossible to scale svgs... so fix that
            options: {
              svgo: true,
              svgoConfig: {
                plugins: [{ name: 'removeViewBox', enabled: false }],
              },
            },
          },
        ],
      },
    ].concat(config.module.rules)

    config.plugins = [
      new MiniCssExtractPlugin(),
      new SVGSymbolSprite.Plugin({
        filename: `static/media/icon-sprite.svg`,
        injectSpriteId: false,
      }),
    ].concat(config.plugins)

    return config
  },
}
