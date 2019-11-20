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
import { ThemeProvider as EmotionTheme } from 'emotion-theming'
import svgSymbolSpriteLoader from 'svg-symbol-sprite-loader'

// ⚠️ Side effects imports, note styles must be imported before components to
// ensure component styles can override them
import './index.scss'
import './utils/require-icons'

import App from './components/App/App'
import { CodeBlock } from './components/universal'
import configureStore from './dux/store'
import logger from './utils/logger'
import { componentryTheme } from './theme/componentry'
import { emotionTheme } from './theme/emotion'

// Injects SVG symbol sprite into document from local storage if it exists,
// otherwise fetch, cache in local storage and inject.
svgSymbolSpriteLoader({ useCache: process.env.NODE_ENV === 'production' })

const store = configureStore()

// Configure components that will be used to render elements parsed out by MDX
const components = {
  pre: props => <div {...props} />,
  code: CodeBlock,
}

// Start the party 🎉
// Render all of the root application providers then application root component
render(
  <React.StrictMode>
    <Provider store={store}>
      <Theme theme={componentryTheme}>
        <EmotionTheme theme={emotionTheme}>
          <MDXProvider components={components}>
            <App />
          </MDXProvider>
        </EmotionTheme>
      </Theme>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

logger('React prototype application initialized 🎉')
