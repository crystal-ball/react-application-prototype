/**
 * CoreJS includes the polyfills for new language features compiled by Babel.
 * Explicitly set the `core-js` version used by `preset-env` per Babel best
 * practices and allow polyifilling proposal stage features
 */
const corejs = { version: 3, proposals: true }

/**
 * Babel configurations
 *
 * Babel configs are specified by environment (explicit configs by env makes it
 * easy to understand how each env is transformed).
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
            corejs: { version: 3, proposals: true },
          },
        ],
        '@babel/preset-react',
      ],
      plugins: [
        '@babel/plugin-transform-react-jsx-source', // Better stacks for error boundaries
        'babel-plugin-styled-components', // Better styled component display names
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
            // Disable module transformation to allow webpack to manage it
            modules: false,
            targets: '> 0.25%, not ie 11, not dead',
            // Will automatically add core-js imports for unsupported language
            // features based on environment
            useBuiltIns: 'usage',
            // Set the core-js version as best practice and allow polyifilling
            // proposal stage features
            corejs: { version: 3, proposals: true },
          },
        ],
        '@babel/preset-react',
      ],
      plugins: [
        '@babel/plugin-proposal-class-properties',
        // Runtime will transform Babel helpers to imports from @babel/runtime
        // Passing useESModules allows webpack to handle module transforms
        ['@babel/plugin-transform-runtime', { useESModules: true, corejs }],
      ],
    },
  },
}
