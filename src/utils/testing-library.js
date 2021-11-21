/* eslint-disable import/export */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-restricted-imports -- App RTL utils setup file */
import { render } from '@testing-library/react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'

import { createStore } from '@/dux/store'

// ℹ️ Setup a convenience wrapper for rendering components with a Redux provider
// Ref: https://redux.js.org/recipes/writing-tests#connected-components

function decoratedRender(
  ui,
  {
    preloadedState = undefined,
    store = createStore(preloadedState),
    ...renderOptions
  } = {},
) {
  function StoreDecorator({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  StoreDecorator.defaultProps = {
    children: null,
  }
  StoreDecorator.propTypes = {
    children: PropTypes.node,
  }

  return render(ui, { wrapper: StoreDecorator, ...renderOptions })
}

// Re-export everything
export * from '@testing-library/react'
// Override RTL render method with store decorated method
export { decoratedRender as render }
