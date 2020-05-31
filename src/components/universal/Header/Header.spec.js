import React from 'react'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'

import { EmotionProvider } from '@/theme/emotion'
import configureStore from '@/dux/store'
import Header from './Header'

describe('<Header />', () => {
  test('When header renders, then links to pages are returned', () => {
    render(
      <Provider store={configureStore()}>
        <EmotionProvider>
          <Header />
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
