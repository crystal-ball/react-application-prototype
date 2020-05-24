/**
 * Handle setting Storybook up to match the application env with needed base styles,
 * icons, etc.
 * @module
 */

import svgSymbolSpriteLoader from 'svg-symbol-sprite-loader'

/* eslint-disable-next-line -- Side effect: includes app SASS */
import '../src/index.scss'
/* eslint-disable-next-line -- Side effect: includes app svg icons */
import '../src/utils/require-icons'

// Fetch and inject SVG symbol sprite
svgSymbolSpriteLoader({
  customSpriteId: 'static/media/icon-sprite.svg',
  useCache: 'false',
})
