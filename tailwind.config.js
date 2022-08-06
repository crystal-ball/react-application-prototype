'use strict'

const { borderPlugin, tailwindSafelist } = require('componentry')
const plugin = require('tailwindcss/plugin')
const { theme } = require('./src/theme/theme')

module.exports = {
  theme,
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  corePlugins: {
    preflight: false,
  },

  plugins: [plugin(borderPlugin)],
  safelist: tailwindSafelist,
}
