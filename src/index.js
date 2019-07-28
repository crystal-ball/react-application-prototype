import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'componentry'
import svgSymbolSpriteLoader from 'svg-symbol-sprite-loader'

// ========================================================
// Application Core Elements
// ========================================================

// ⚠️ Import application styles before application components so that base CSS
// styles are included before component styles.
import './index.scss'
import './utils/require-icons'
import App from './components/App/App'
import store from './dux/store'
import logger from './utils/logger'

// Componentry configuration defaults can be updated using the ThemeProvider
// component and passing a theme configuration object
const theme = {
  Button: {
    color: 'primary',
  },
}

// Injects SVG symbol sprite into document from local storage if it exists,
// otherwise fetch, cache in local storage and inject.
svgSymbolSpriteLoader({ useCache: process.env.NODE_ENV === 'production' })

// Start the party 🎉
// Render all of the root application providers then application root component
render(
  <Provider store={store}>
    <ThemeProvider.Provider value={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider.Provider>
  </Provider>,
  document.getElementById('root'),
)

logger('React prototype application initialized 🎉')
