'use strict'

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
}
