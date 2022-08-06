// @ts-check

'use strict'

const { createTheme } = require('componentry')

const themeOverrides = /** @type {const} */ ({
  // --- BREAKPOINTS
  screens: {
    // Common Breakpoints:
    // up to 768 -> common for mobile
    // >768 -> common for tablet portrait
    // >1024 -> common for tablet landscape
    // >1200/1280 -> laptop (1200 if you're not designing for medium, 1280 if you are)
    // --- Recommendations
    // Either: 0->768->1280 (sm/md/lg)
    // Or: 0->1200 (sm/lg)
    lg: '1200px',
  },

  // --- COLORS
  colors: {
    current: 'currentColor',
    transparent: 'transparent',
    inverse: '#eff',

    gray: {
      // Tailwind gray
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
    },

    primary: {
      100: '#FEE9F1',
      300: '#FBA7C9',
      500: '#f52277',
      700: '#931447',
      900: '#4A0A24',
    },
    secondary: {
      100: '#F6FFFD',
      300: '#DCFFF9',
      500: '#A8FFEF',
      700: '#65998F',
      900: '#324D48',
    },
  },

  backgroundColor: {
    body: '#12111f',
    ultra: '#100f1a',
    overlay: 'rgba(17, 15, 22, 0.75)',
  },

  textColor: {
    body: '#c7e3ee',
    display: '#A8FFEF',
    anchor: '#A8FFEF',
    heading: '#baf0ff',
    muted: '#75B7BB',
    primary: '#f52277',
    radvender: '#bf9afc',
    code: '#ffadc0',
    love: '#fcc4dd',
  },

  // --- TYPOGRAPHY

  fontFamily: {
    heading: '"Aldrich", monospace',
    body: '"Nunito Sans", sans-serif',
    monospace: '"Fira Code", monospace',
  },
  fontWeight: {
    heading: 400,
    subtitle: 700,
  },
  letterSpacing: {
    heading: '0.05em',
  },
  lineHeight: {
    body: 1.555556,
  },

  // --- BORDERS
  border: {
    100: '1px solid #1A1B46',
    200: '1px solid #242560',
    300: '1px solid #1D1E7D',
    400: '1px solid #8C2C56',
    500: '1px solid #FC0065',
  },

  // --- SHADOWS

  boxShadow: {
    primary: '0 0 10px #f52277',
  },

  textShadow: {
    display: '#f52277 1px 0px 8px',
  },
})

const { colors, ...createThemeValues } = themeOverrides

const theme = createTheme({
  extend: {
    colors: themeOverrides.colors,
  },
  ...createThemeValues,
})

module.exports = { theme, themeOverrides }
