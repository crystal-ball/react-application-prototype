import React from 'react'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'

import { EmotionProvider } from '@/theme/emotion'
import configureStore from '@/dux/store'
import HomeScreen from './HomeScreen'

describe('<HomeScreen />', () => {
  test('When screen renders, then page title is included', () => {
    render(
      <Provider store={configureStore()}>
        <EmotionProvider>
          <HomeScreen />
        </EmotionProvider>
      </Provider>,
    )
    expect(screen.getByText('React Application Prototype'))
  })
})
