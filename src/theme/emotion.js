import React from 'react'
import { node } from 'prop-types'
import { ThemeProvider as EmotionTheme } from 'emotion-theming'

// Emotion styles theme is accessible using emotion-theming
export const emotionTheme = {
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    base: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  typography: {
    variants: {
      title1: {},
    },
  },
}

/**
 * Emotion ThemeProvider wrapper that can be used with Storybook stories or
 * unit tests.
 */
export function EmotionProvider({ children }) {
  return <EmotionTheme theme={emotionTheme}>{children}</EmotionTheme>
}

EmotionProvider.propTypes = {
  children: node.isRequired,
}
