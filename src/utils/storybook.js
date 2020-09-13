import React from 'react'
import { Provider } from 'react-redux'

import { createStore } from '@/dux/store'

export const storeDecorator = (preloadedState) => (Story) => {
  const store = createStore(preloadedState)

  return (
    <Provider store={store}>
      <Story />
    </Provider>
  )
}
