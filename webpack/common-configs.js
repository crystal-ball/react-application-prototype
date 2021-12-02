'use strict'

const fs = require('fs')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CSSMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const SVGSymbolSprite = require('svg-symbol-sprite-loader')
const TerserPlugin = require('terser-webpack-plugin')
const { EnvironmentPlugin, ProgressPlugin } = require('webpack')

const { themeAccessor } = require('./theme-accessor')

const isProduction = process.env.NODE_ENV === 'production'
const fileHash = isProduction ? '.[contenthash]' : ''
const publicPath = '/'

const context = fs.realpathSync(process.cwd())
const paths = {
  context,
  htmlTemplate: path.join(context, 'src/index.html'),
  iconSpriteIncludes: path.join(context, 'src/media/icons'),
  jsLoaderIncludes: path.join(context, 'src'),
  output: path.join(context, 'public'),
  static: path.join(context, 'static'),
}

/**
 * The common configurations are used across environments
 */
module.exports = {
  // Explicitly set the build context for resolving entry points and loaders
  // https://webpack.js.org/configuration/entry-context/#context
  context: paths.context,

  // Output build assets with hashed filenames in prod builds for long term caching
  // https://webpack.js.org/configuration/output/
  output: {
    path: paths.output,
    filename: `static/js/[name]${fileHash}.js`,
    assetModuleFilename: `static/media/[name].[contenthash][ext][query]`,
    // The publicPath value is prefixed to every URL created by the runtime or
    // loaders. The default is '' which means resources from nested routes have
    // incorrect paths, eg: 'some/application/route/static/js/main.js
    // The default config set here ensures that requests are absolute, eg:
    // '/static/js/main.js'
    publicPath,
    clean: true, // Clears /public before builds
    hashDigestLength: 12, // Configures the lengths of [contenthash] globally
  },

  // These options control how modules are resolved.
  // https://webpack.js.org/configuration/resolve/
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    // Alias can be used to point imports to specific modules, include empty
    // object to allow direct assignment in consuming packages
    alias: {},
  },

  // These options control what bundle information gets displayed
  // https://webpack.js.org/configuration/stats/#stats-options
  // "minimal" outputs when errors or new compilation happen
  stats: isProduction ? 'normal' : 'minimal',

  // Optimization tweaks for A++ asset caching
  // https://webpack.js.org/guides/caching
  optimization: {
    splitChunks: {
      // This indicates which chunks will be selected for optimization, setting
      // 'all' mmeans that chunks can be shared even between async and non-async
      // chunks.
      // ref: https://webpack.js.org/plugins/split-chunks-plugin/#splitchunkschunks
      chunks: 'all',
    },
    // Configured minimizers for uglifying assets (in production builds only)
    // https://webpack.js.org/configuration/optimization/#optimizationminimizer
    // https://webpack.js.org/plugins/mini-css-extract-plugin/#minimizing-for-production
    minimizer: [
      new CSSMinimizerPlugin(),
      new TerserPlugin({
        exclude: /node_modules/,
        terserOptions: {
          // Don't mangle component names
          keep_fnames: /^[A-Z]/,
        },
      }),
    ],
  },

  // Common loaders
  // ---------------------------------------------------------------------------
  module: {
    rules: [
      // --- 🎉 JS Loader
      {
        test: /\.(jsx?|tsx?)$/,
        include: paths.jsLoaderIncludes,
        use: [
          { loader: 'babel-loader', options: { cacheDirectory: true } },
          { loader: '@linaria/webpack-loader', options: { sourceMap: true } },
        ],
      },

      // --- 📝 MDX Loader
      {
        test: /\.mdx$/,
        use: [
          { loader: 'babel-loader' },
          {
            loader: '@mdx-js/loader',
            options: {
              rehypePlugins: [],
              remarkPlugins: [],
            },
          },
        ],
      },

      // --- 😍 Styles Loader
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
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: isProduction },
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: isProduction },
          },
        ],
      },

      // --- 📦 SVG icon sprite loader
      // Create an svg sprite with any icons imported into app
      {
        test: /\.svg$/,
        include: paths.iconSpriteIncludes,
        use: [{ loader: 'svg-symbol-sprite-loader' }],
      },

      // --- 👾 SVG to React Loader
      // Imported SVGs are converted to React components
      {
        test: /\.svg$/,
        // Make sure that we don't try to use with icons for svg sprite
        exclude: paths.iconSpriteIncludes,
        use: [
          {
            loader: '@svgr/webpack',

            options: {
              svgo: true,
              svgoConfig: {
                plugins: [
                  {
                    name: 'preset-default',
                    params: {
                      overrides: {
                        // By default svgo is configured to remove viewbox attrs which breaks
                        // svg scaling so we disable that plugin
                        removeViewBox: false,
                      },
                    },
                  },
                ],
              },
            },
          },
        ],
      },

      // --- 🖼 Images Loader
      // Basic image loader setup with file name hashing
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },

      // --- 📝 Text files Loader
      // If you want to import a text file you can ¯\_(ツ)_/¯
      {
        test: /\.txt$/,
        type: 'asset',
      },
    ],
  },

  // Common plugins
  // ---------------------------------------------------------------------------
  plugins: [
    // --- 📣 Progress
    new ProgressPlugin(),

    // --- 💉 Variable injections
    // Define environment variables in build.
    // ℹ️ Values passed to EnvironmentPlugin are defaults
    new EnvironmentPlugin({
      DEBUG: false,
      PUBLIC_PATH: publicPath, // useful for routing and media from /public dir
      LS_ACCESS_TOKEN: process.env.LS_ACCESS_TOKEN || '',
      RELEASE_VERSION: (process.env.VERCEL_GITHUB_COMMIT_SHA || '').slice(0, 7),
    }),

    // --- 🖨 File copying
    // Copy public directory to build directory, this is an escape hatch for assets
    // needed that are not imported into build
    new CopyWebpackPlugin({
      patterns: [
        paths.static,
        // Copy the package.json to the static directory for easy fetch demo
        { from: './package.json', to: 'static/json/package.json' },
      ],
    }),

    // --- 😍 Styles extractions
    new MiniCssExtractPlugin({
      filename: `static/css/[name]${fileHash}.css`,
    }),

    // --- 📦 HTML index generator
    // Generates index.html with injected script/style resources paths
    new HtmlWebpackPlugin({
      inject: true,
      minify: false,
      publicPath,
      template: paths.htmlTemplate,
    }),

    // --- 📦 Asset extractions
    // Plugin for SVG symbol sprite extracts imported SVGs into a file
    // ⚠️ Order is important, this plugin must be included after HTML plugin so that
    // HTML plugin hooks are pre-registered!
    new SVGSymbolSprite.Plugin({
      filename: `static/media/icon-sprite${fileHash}.svg`,
      // Don't inject the sprite id in electron and storybook targets because the
      // HTML plugin might be different (Storybook) or the app will just always
      // fetch it (both)
      injectSpriteId: true,
    }),
  ],
}
