/* eslint-disable */
'use strict'

const theme = require('./src/theme/radical')

module.exports = {
  purge: false,
  darkMode: false,
  theme: {
    extend: {},
    screens: {
      lg: theme.breakpoints.lg,
    },
    colors: {
      primary: theme.palette.primary,
    },
    secondary: theme.palette.secondary,
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

// Original size: 3.4MB
// 1 breakpoint && 2 colors: 500KB

// Common Breakpoints:
// up to 768 -> common for mobile
// >768 -> common for tablet portrait
// >1024 -> common for tablet lanscape
// >1200/1280 -> laptop (1200 if you're not designing for medium, 1280 if you are)
// Either: 0->768->1280 (sm/md/lg)
// Or: 0->1200 (sm/lg)

/**
 * Use Tailwind for utilities
 * ? Will CSS purge work with React components (it should)
 * ? Use PostCSS for writing local component styles
 */
