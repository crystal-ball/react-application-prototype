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
            // Set the core-js version as best practice and allow polyifilling
            // proposal stage features
            corejs,
          },
        ],
        '@babel/preset-react',
        // Replace React.createElement with Emotion's `jsx` call to enable
        // Emotion's CSS in JS
        '@emotion/babel-preset-css-prop',
      ],
      plugins: [
        'react-hot-loader/babel',
        // Emotion must be first! Hoists and compresses styles and provides
        // source maps in dev
        ['emotion', { sourceMap: true }],
        '@babel/plugin-transform-react-jsx-source', // Better stacks for error boundaries
        '@babel/plugin-proposal-class-properties',
        // Runtime will transform Babel helpers to imports from @babel/runtime
        // Passing useESModules allows webpack to handle module transforms
        // Passing corejs configs will use imports from @babel/runtime-corejs3
        // instead of global polyfills
        ['@babel/plugin-transform-runtime', { useESModules: true, corejs }],
      ],
    },
    /**
     * Production env targets current modern browsers and `useBuiltIns` will
     * automatically add polyfill imports for newer browser features when
     * they're used in code.
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
        'react-hot-loader/babel',
        'emotion',
        '@babel/plugin-proposal-class-properties',
        ['@babel/plugin-transform-runtime', { useESModules: true, corejs }],
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
        'react-hot-loader/babel',
        '@babel/plugin-proposal-class-properties',
        ['@babel/plugin-transform-runtime', { useESModules: false, corejs }],
      ],
    },
  },
}
