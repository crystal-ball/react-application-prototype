/* global module */

/**
 * CoreJS includes the polyfills for new language features compiled by Babel.
 * Explicitly set the `core-js` version used by `preset-env` per Babel best
 * practices and allow polyifilling proposal stage features
 */
const corejs = { version: 3, proposals: true }

/**
 * 📝 Babel configurations
 *
 * - Project wide configuration file type `babel.config.js` used to set the
 *   "root" configurations. This is required for any project that needs to
 *   transform a linked npm package.
 * - Configs are specified by environment to make it easier to understand how
 *   each env is transformed.
 * - Only polyfills required for application code are added with the `usage`
 *   option of the preset-env `useBuiltIns`, but this does assume that libraries
 *   have properly handled compiling their polyfills.
 * - Under the hood calling `api.env` will enable caching based on NODE_ENV
 *
 * 📝 Core JS
 *
 * CoreJS includes the polyfills for new language features compiled by Babel.
 * Explicitly set the `core-js` version used by `preset-env` per Babel best
 * practices
 * - Optionally experimental features can be polyfilled by setting corejs to:
 *   { version: 3, proposals: true }
 * - Optionally the transform-runtime plugin accepts a `corejs` configuration
 *   option that will use imports from core-js to polyfill language features
 *   instead of adding polyfills to global scope (this is preferred for package
 *   compilation) Note that enabling this requires adding `@babel/runtime-corejs3`
 *   as a dependency.
 */
module.exports = function babelConfigs(api) {
  return {
    // --------------------------------------------------------
    // Presets
    presets: [
      // Automatically use the minimum set of syntax and polyfill transforms to
      // meet target environment using browserslist config.
      [
        '@babel/preset-env',
        {
          // Transform modules to common js in test for Jest
          // Disable module transformation in dev and prod builds to allow
          // webpack to smart-manage modules.
          modules: api.env('test') ? 'commonjs' : false,
          // Automatically add core-js polyfill imports for unsupported language
          // features using target environment
          useBuiltIns: 'usage',
          // Configure the version of core-js polyfill helpers injected by
          // plugins
          corejs,
        },
      ],
      // Includes plugins required to transform JSX. Development plugins add
      // references to source and self on each component
      ['@babel/preset-react', { development: api.env('development'), useBuiltIns: true }],
      // Includes the `babel-plugin-emotion` and configures the transform-react-jsx
      // plugin to replace `React.createElement` with calls to Emotion's `jsx` to
      // enable Emotion's CSS in JS
      '@emotion/babel-preset-css-prop',
    ],

    // --------------------------------------------------------
    // Plugins
    plugins: [
      // Auto-loads different transforms by env 😱... In development the `hot`
      // fn is magically transformed to extend HMR to handle components.
      // In production, plugin will replace `hot(module)(App)` with `App` which is
      // important for webpack optimizations
      // Ref: https://github.com/gaearon/react-hot-loader/issues/1080
      'react-hot-loader/babel',
      // Transform Runtime will transform inline Babel helper fns to imports from
      //   @babel/runtime
      // Passing useESModules disables running helper imports through the common
      //   js module transform and allows webpack to manage the esm
      // Passing corejs configs will use imports from @babel/runtime-corejs3
      //   instead of global polyfills (this should be set for libraries but is
      //   optional for applications)
      [
        '@babel/plugin-transform-runtime',
        {
          corejs,
          useESModules: api.env(['development', 'production']),
          // https://github.com/babel/babel/issues/10261
          // eslint-disable-next-line
          version: require('@babel/helpers/package.json').version,
        },
      ],

      // --- Additional stage-3 proposals not present in preset-env set
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-nullish-coalescing-operator',
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-proposal-private-methods',
    ],
  }
}
