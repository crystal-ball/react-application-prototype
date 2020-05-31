import React from 'react'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'

import { EmotionProvider } from '@/theme/emotion'
import configureStore from '@/dux/store'
import FourOhFourScreen from './FourOhFourScreen'

describe('<FourOhFourScreen />', () => {
  test('When screen renders, then page title is included', () => {
    render(
      <Provider store={configureStore()}>
        <EmotionProvider>
          <FourOhFourScreen />
        </EmotionProvider>
      </Provider>,
    )
    expect(screen.getByText('Introduction')).toHaveAttribute('href', '/')
    expect(screen.getByText('Application Stack')).toHaveAttribute(
      'href',
      '/application-stack',
    )
  })
})
