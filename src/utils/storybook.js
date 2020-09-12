import React from 'react'
import { Provider } from 'react-redux'
import configureStore from '@/dux/store'

export const storeDecorator = (preloadedState) => (Story) => {
  const store = configureStore(preloadedState)

  return (
    <Provider store={store}>
      <Story />
    </Provider>
  )
}
