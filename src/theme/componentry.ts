/* eslint-disable @typescript-eslint/no-empty-interface */
import { configureTextElementsMap } from 'componentry'

import { themeOverrides } from './theme'

export {}

const textElementsMap = {
  display: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  subtitle1: 'h4',
  subtitle2: 'h5',
  lead: 'p',
  body: 'p',
  code: 'code',
} as const

configureTextElementsMap(textElementsMap)

// --------------------------------------------------------
// THEME OVERRIDES

declare module 'componentry/types/theme/theme' {
  type CustomTheme = typeof themeOverrides

  export interface ThemeOverrides extends CustomTheme {}
}

declare module 'componentry/types/components/Text/Text' {
  interface TextPropsOverrides {
    variant?: keyof typeof textElementsMap
  }
}
