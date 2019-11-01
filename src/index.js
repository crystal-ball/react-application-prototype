import 'react-hot-loader'
import React from 'react'
import { Provider } from 'react-redux'
import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider as ComponentryTheme } from 'componentry'
import { ThemeProvider as EmotionTheme } from 'emotion-theming'
import svgSymbolSpriteLoader from 'svg-symbol-sprite-loader'
// ℹ️ During development react-dom is aliased to @hot-loader/react-dom in the
// webpack configs for RHL
import { render } from 'react-dom'

import { componentryTheme } from './theme/componentry'
import { emotionTheme } from './theme/emotion'
import { CodeBlock } from './components/universal'

// ⚠️ Import styles first to ensure lower specificity than component styles
import './index.scss'
import './utils/require-icons'

import App from './components/App/App'
import configureStore from './dux/store'
import logger from './utils/logger'

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
      <ComponentryTheme.Provider value={componentryTheme}>
        <EmotionTheme theme={emotionTheme}>
          <MDXProvider components={components}>
            <App />
          </MDXProvider>
        </EmotionTheme>
      </ComponentryTheme.Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

logger('React prototype application initialized 🎉')
