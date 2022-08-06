'use strict'

const { theme } = require('../theme')

module.exports.Text = {
  '.C9Y-Text-display': {
    color: theme.textColor.primary,
    fontFamily: theme.fontFamily.heading,
    fontSize: 'var(--display1)',
    fontWeight: theme.fontWeight.heading,
    textShadow: theme.textShadow.display,
  },
  '.C9Y-Text-h1': {
    color: theme.textColor.heading,
    fontFamily: theme.fontFamily.heading,
    fontSize: 'var(--heading1)',
    fontWeight: theme.fontWeight.heading,
    letterSpacing: 'var(--heading-letterSpacing)',
  },
  '.C9Y-Text-h2': {
    color: theme.textColor.heading,
    fontFamily: theme.fontFamily.heading,
    fontSize: 'var(--heading2)',
    fontWeight: theme.fontWeight.heading,
    letterSpacing: 'var(--heading-letterSpacing)',
  },
  '.C9Y-Text-h3': {
    color: theme.textColor.heading,
    fontFamily: theme.fontFamily.heading,
    fontSize: 'var(--heading3)',
    fontWeight: theme.fontWeight.heading,
    letterSpacing: 'var(--heading-letterSpacing)',
  },
  '.C9Y-Text-subtitle1': {
    color: theme.textColor.heading,
    fontFamily: theme.fontFamily.heading,
    fontSize: 'var(--subheading1)',
    fontWeight: theme.fontWeight.subtitle,
    letterSpacing: theme.letterSpacing.heading,
  },
  '.C9Y-Text-subtitle2': {
    color: theme.textColor.heading,
    fontFamily: theme.fontFamily.heading,
    fontSize: 'var(--subheading2)',
    fontWeight: theme.fontWeight.subtitle,
    letterSpacing: theme.letterSpacing.heading,
  },
  '.C9Y-Text-body': {
    'fontSize': 'var(--font-md)',
    'maxWidth': '800px',

    '& + &': {
      marginTop: '0.75rem',
    },
  },
  '.C9Y-Text-lead': {
    color: theme.textColor.body,
    fontSize: 'var(--lead)',
    fontWeight: theme.fontWeight.heading,
  },
  '.C9Y-Text-code': {
    fontSize: 'var(--code)',
    color: theme.textColor.code,
    fontFamily: theme.fontFamily.monospace,
  },
}
