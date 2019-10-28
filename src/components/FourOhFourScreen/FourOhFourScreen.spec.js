import React from 'react'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'

import { EmotionProvider } from '@/theme/emotion'
import configureStore from '@/dux/store'
import FourOhFourScreen from './FourOhFourScreen'

describe('<FourOhFourScreen />', () => {
  test('When screen renders, then page title is included', () => {
    const { getByText } = render(
      <Provider store={configureStore()}>
        <EmotionProvider>
          <FourOhFourScreen />
        </EmotionProvider>
      </Provider>,
    )
    expect(getByText('Introduction')).toHaveAttribute('href', '/')
    expect(getByText('Application Stack')).toHaveAttribute('href', '/application-stack')
  })
})
