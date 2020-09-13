// @flow
// Converted automatically using ./tools/themeFromVsCode

import type { PrismTheme } from 'prism-react-renderer'

export const radicalTheme: PrismTheme = {
  plain: {
    color: '#7c9c9e',
    backgroundColor: '#17184c',
    borderRadius: 4,
  },
  styles: [
    {
      types: ['comment'],
      style: {
        color: 'rgb(69, 137, 140)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['constant'],
      style: {
        color: 'rgb(250, 97, 184)',
      },
    },
    {
      types: ['operator'],
      style: {
        color: '#ff85a1',
      },
    },
    {
      types: ['keyword'],
      style: {
        color: '#d5358f',
      },
    },
    {
      types: ['string'],
      style: {
        color: 'rgb(169, 254, 247)',
      },
    },
    {
      types: ['variable'],
      style: {
        color: 'rgb(199, 227, 238)',
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: 'rgb(168, 255, 219)',
      },
    },
    // Things like import names, class names, type names, etc.
    {
      types: ['class-name', 'maybe-class-name'],
      style: {
        color: '#A6E2E0',
      },
    },
    {
      types: ['builtin', 'tag'],
      style: {
        color: 'rgb(124, 156, 158)',
      },
    },
  ],
}
