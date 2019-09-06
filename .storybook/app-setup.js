/* eslint-disable import/no-extraneous-dependencies */
import svgSymbolSpriteLoader from 'svg-symbol-sprite-loader'

/**
 * Handle setting Storybook up to match the application env with needed base styles,
 * icons, etc.
 */
import '../src/index.scss'
import '../src/utils/require-icons'

// Fetch and inject SVG symbol sprite
svgSymbolSpriteLoader({ customSpriteId: 'icon-sprite.svg', useCache: 'false' })
