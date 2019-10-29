import React from 'react'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'

import { EmotionProvider } from '@/theme/emotion'
import configureStore from '@/dux/store'
import HomeScreen from './HomeScreen'

describe('<HomeScreen />', () => {
  test('When screen renders, then page title is included', () => {
    const { getByText } = render(
      <Provider store={configureStore()}>
        <EmotionProvider>
          <HomeScreen />
        </EmotionProvider>
      </Provider>,
    )
    expect(getByText('React Application Prototype'))
  })
})