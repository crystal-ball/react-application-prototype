/* global module */

/**
 * CoreJS includes the polyfills for new language features compiled by Babel.
 * Explicitly set the `core-js` version used by `preset-env` per Babel best
 * practices (optionall an object can be used to allow polyfilling experimental
 * features: { version: 3, proposals: true })
 */
const corejs = 3

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
 */
module.exports = {
  env: {
    /**
     * Development env targets latest Chrome/FF browsers and includes plugins
     * that provide more detailed info for debugging workflows
     */
    development: {
      presets: [
        [
          '@babel/preset-env',
          {
            // Disable module transformation to allow webpack to manage it
            modules: false,
            targets: { chrome: '73', firefox: '67' },
            // Will automatically add core-js polyfill imports for unsupported
            // language features based on environment
            useBuiltIns: 'usage',
            // Configures the version of core-js helpers injected by plugins
            corejs,
          },
        ],
        '@babel/preset-react',
        // Replace React.createElement with Emotion's `jsx` call to enable
        // Emotion's CSS in JS
        '@emotion/babel-preset-css-prop',
      ],
      plugins: [
        // Emotion must be first! Hoists and compresses styles and provides
        // source maps in dev
        ['emotion', { sourceMap: true }],
        // Extends HMR with hot reloading for components
        'react-hot-loader/babel',
        // Provides better call stacks for error boundaries
        '@babel/plugin-transform-react-jsx-source',
        // Transform Runtime will transform inline Babel helper fns to imports
        //   from @babel/runtime
        // Passing useESModules disables running helper imports through the
        //   common js module transform and allows webpack to manage the esm
        // Passing corejs configs will use imports from @babel/runtime-corejs3
        //   instead of global polyfills (this should be set for libraries but
        //   is optional for applications)
        ['@babel/plugin-transform-runtime', { useESModules: true }],
        // --- Stage 3 plugins
        '@babel/plugin-proposal-class-properties',
      ],
    },
    /**
     * Production env targets current modern browsers and only includes plugins
     * used by production code.
     */
    production: {
      presets: [
        [
          '@babel/preset-env',
          {
            // ℹ️ See development env for preset-env notes
            modules: false,
            targets: '> 0.25%, not ie 11, not dead',
            useBuiltIns: 'usage',
            corejs,
          },
        ],
        '@babel/preset-react',
        '@emotion/babel-preset-css-prop',
      ],
      plugins: [
        'emotion',
        // When NODE_ENV is production, RHL plugin will replace `hot(module)(App)`
        // with `App` which is important for webpack optimizations
        // Ref: https://github.com/gaearon/react-hot-loader/issues/1080
        'react-hot-loader/babel',
        ['@babel/plugin-transform-runtime', { useESModules: true }],
        // --- Stage 3 plugins
        '@babel/plugin-proposal-class-properties',
      ],
    },
    /**
     * Test env mimics production, but uses commonjs modules because Jest
     * doesn't support ESModules and operates directly on source code.
     */
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            // ℹ️ See development env for preset-env notes
            modules: 'commonjs',
            targets: '> 0.25%, not ie 11, not dead',
            useBuiltIns: 'usage',
            corejs,
          },
        ],
        '@babel/preset-react',
        '@emotion/babel-preset-css-prop',
      ],
      plugins: [
        'emotion',
        'react-hot-loader/babel',
        ['@babel/plugin-transform-runtime', { useESModules: false }],
        // --- Stage 3 plugins
        '@babel/plugin-proposal-class-properties',
      ],
    },
  },
}
