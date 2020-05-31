import React from 'react'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'

import { EmotionProvider } from '@/theme/emotion'
import configureStore from '@/dux/store'
import StackScreen from './StackScreen'

describe('<StackScreen />', () => {
  test('When screen renders, then page title is included', () => {
    render(
      <Provider store={configureStore()}>
        <EmotionProvider>
          <StackScreen />
        </EmotionProvider>
      </Provider>,
    )
    expect(screen.getByText('Application Stack'))
  })
})
