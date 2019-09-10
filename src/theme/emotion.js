import React from 'react'
import { ThemeProvider as EmotionTheme } from 'emotion-theming'

// Emotion styles theme is accessible using emotion-theming
export const emotionTheme = {
  colors: {
    lightGrayBg: '#636c72',
  },
}

/**
 * Emotion ThemeProvider wrapper that can be used with Storybook stories or
 * unit tests.
 */
export const emotionWrapper = render => (
  <EmotionTheme theme={emotionTheme}>{render}</EmotionTheme>
)
