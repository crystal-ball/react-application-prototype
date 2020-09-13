import React from 'react'
// eslint-disable-next-line no-restricted-imports
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'

import { createStore } from '@/dux/store'

// ℹ️ Convenience wrapper for rendering components with a Redux provider
// Ref: https://redux.js.org/recipes/writing-tests#connected-components

function decoratedRender(
  ui,
  {
    preloadedState = undefined,
    store = createStore(preloadedState),
    ...renderOptions
  } = {},
) {
  // eslint-disable-next-line react/prop-types
  function StoreDecorator({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return render(ui, { wrapper: StoreDecorator, ...renderOptions })
}

// re-export everything
// eslint-disable-next-line no-restricted-imports
export * from '@testing-library/react'
// override render method
export { decoratedRender as render }
