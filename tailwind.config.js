/* eslint-disable */
'use strict'

module.exports = {
  purge: false,
  darkMode: false,
  theme: {
    extend: {},
    screens: {
      lg: '1200px',
    },
    colors: {
      primary: {
        100: '#FEE9F1',
        300: '#FBA7C9',
        500: '#f52277',
        700: '#931447',
        900: '#4A0A24',
      },
    },
    secondary: {
      100: '#F6FFFD',
      300: '#DCFFF9',
      500: '#A8FFEF',
      700: '#65998F',
      900: '#324D48',
    },
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
