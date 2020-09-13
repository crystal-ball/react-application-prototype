/**
 * ℹ️ Polyfill environments, these imports will be transformed to just the
 * polyfills needed to meet the browserslist targets by the `entry` config for
 * `@babel/preset-env`
 */
import 'core-js'
import 'regenerator-runtime/runtime'

/**
 * ℹ️ RHL must be imported before React/DOM for some setup magic, note during
 * development react-dom is aliased to @hot-loader/react-dom in webpack configs
 */
import 'react-hot-loader'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { MDXProvider } from '@mdx-js/react'
import { Theme } from 'componentry'
import svgSymbolSpriteLoader from 'svg-symbol-sprite-loader'

/**
 * ℹ️ Import SASS styles before any components to include base styles in DOM
 * first and ensure component styles have greater specificity
 */
import './index.scss'
import './utils/require-icons'

import App from './components/App/App'
import { CodeBlock } from './components/universal'
import { NODE_ENV } from './config/environment'
import { createStore } from './dux/store'
import logger from './utils/logger'
import { componentryTheme } from './theme/componentry'

// Injects SVG symbol sprite into document from local storage if it exists,
// otherwise fetch, cache in local storage and inject.
svgSymbolSpriteLoader({ useCache: NODE_ENV === 'production' })

const store = createStore()

// Configure components that will be used to render elements parsed out by MDX
const components = {
  pre: (props) => <div {...props} />,
  code: CodeBlock,
}

// Start the party 🎉
// Render all the application root providers and application root component
render(
  <React.StrictMode>
    <Provider store={store}>
      <Theme theme={componentryTheme}>
        <MDXProvider components={components}>
          <App />
        </MDXProvider>
      </Theme>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

logger('React prototype application initialized 🎉')
