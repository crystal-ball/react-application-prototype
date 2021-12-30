'use strict'

const theme = require('./src/theme/radical')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      lg: theme.breakpoints.lg,
    },
    extend: {
      colors: {
        primary: theme.palette.primary,
        secondary: theme.palette.secondary,
      },
    },
  },
  plugins: [],
}

// Original size: 3.4MB
// 1 breakpoint && 2 colors: 541KB

// Common Breakpoints:
// up to 768 -> common for mobile
// >768 -> common for tablet portrait
// >1024 -> common for tablet landscape
// >1200/1280 -> laptop (1200 if you're not designing for medium, 1280 if you are)
// --- Recommendations
// Either: 0->768->1280 (sm/md/lg)
// Or: 0->1200 (sm/lg)

/**
 * ✓ Use Tailwind for utilities
 * ✓ Use PostCSS for writing local component styles
 */
