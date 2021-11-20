'use strict'

const { CleanWebpackPlugin } = require('clean-webpack-plugin')

/** Production environment specific configurations. */
module.exports = {
  mode: 'production',
  bail: true, // Fail out on the first error instead of tolerating it.
  devtool: 'source-map', // Real source maps for production builds

  // Produce warnings about file sizes
  performance: {
    hints: 'warning', // 'error' or false are valid too
    maxEntrypointSize: 500000, // ~500Kb
    maxAssetSize: 275000, // ~275Kb
    // Don't warn about image file sizes
    assetFilter: (assetFilename) => !/\.(map|jpe?g|png|gif|svg)$/i.test(assetFilename),
  },

  plugins: [
    // --- 📦 Build Prep
    // Wipe output folder before the build
    new CleanWebpackPlugin(),
  ],
  // --- ✅ Validations + Optimizations
  // Check for duplicate versions of the same package, ie React 15 && React 16
  // in the same build (No longer maintained)
  // new DuplicatePackageCheckerPlugin({ verbose: true }),
}
