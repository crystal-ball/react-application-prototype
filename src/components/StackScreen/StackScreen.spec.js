import React from 'react'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'

import configureStore from '@/dux/store'
import StackScreen from './StackScreen'

describe('<StackScreen />', () => {
  test('When screen renders, then page title is included', () => {
    render(
      <Provider store={configureStore()}>
        <StackScreen />
      </Provider>,
    )
    expect(screen.getByText('Application Stack'))
  })
})
