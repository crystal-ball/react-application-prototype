/**
 * ℹ️ Polyfill environments, these imports will be transformed to just the
 * polyfills needed to meet the browserslist targets by the `entry` config for
 * `@babel/preset-env`
 */
import 'core-js'
import 'regenerator-runtime/runtime'

/**
 * Setup OTel tracing
 */
// import './utils/setup-tracer'

import { ComponentryProvider } from 'componentry'
import { StrictMode } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import svgSymbolSpriteLoader from 'svg-symbol-sprite-loader'

/**
 * ℹ️ Import SASS styles before any components to include base styles in DOM
 * first and ensure component styles have greater specificity
 */
import './index.css'
import './utils/require-icons'

import { App } from './components/App/App'
import { NODE_ENV } from './config/environment'
import { store } from './dux/store'
import { theme } from './theme/theme'
import { logger } from './utils/logger'

// Injects SVG symbol sprite into document from local storage if it exists,
// otherwise fetch, cache in local storage and inject.
svgSymbolSpriteLoader({ useCache: NODE_ENV === 'production' })

// Start the party 🎉
// Render all the application root providers and application root component
render(
  <StrictMode>
    <Provider store={store}>
      <ComponentryProvider theme={theme}>
        <App />
      </ComponentryProvider>
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
)

logger('React prototype application initialized 🎉')
