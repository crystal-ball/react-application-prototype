import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

// ========================================================
// Application Core Elements
// ========================================================
import App from './components/App/App'
import store from './dux/store'

// Start the party 🎉
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
