/**
 * Polyfill environments, these imports will be transformed to just the
 * polyfills needed to meet the browserslist targets by the `entry` config for
 * `@babel/preset-env`
 */
import 'core-js' // eslint-disable-line import/no-unassigned-import -- Side effect: polyfill
import 'regenerator-runtime/runtime' // eslint-disable-line import/no-unassigned-import -- Side effect: polyfill

/**
 * ℹ️ RHL must be imported before React/DOM for some setup magic, note during
 * development react-dom is aliased to @hot-loader/react-dom in webpack configs
 */
import 'react-hot-loader' // eslint-disable-line import/no-unassigned-import -- Side effect: polyfill
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { MDXProvider } from '@mdx-js/react'
import { Theme } from 'componentry'
import svgSymbolSpriteLoader from 'svg-symbol-sprite-loader'

// ⚠️ Side effects imports, note styles must be imported before components to
// ensure component styles can override them
import './index.scss' // eslint-disable-line import/no-unassigned-import -- Side effect: includes SASS
import './utils/require-icons' // eslint-disable-line import/no-unassigned-import -- Side effect: includes svg icons

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
// Render all of the root application providers then application root component
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
