import { Theme } from 'componentry'
import svgSymbolSpriteLoader from 'svg-symbol-sprite-loader'

import { componentryTheme } from '@/theme/componentry'

// Include app base styles
import '../src/index.scss'

// Import app icon sprite
import '../src/utils/require-icons'

// Fetch and inject SVG symbol sprite
svgSymbolSpriteLoader({
  // Storybook webpack configs aren't setup with HTML plugin so we need to
  // supply the sprite path
  customSpriteId: 'static/media/icon-sprite.svg',
  useCache: false,
})

export const decorators = [
  // Global decorator sets Componentry prop defaults
  (Story) => (
    <Theme theme={componentryTheme}>
      <Story />
    </Theme>
  ),
]

export const parameters = {
  options: {
    storySort: {
      order: ['React Application Prototype', 'Universal', 'App'],
    },
  },
}
