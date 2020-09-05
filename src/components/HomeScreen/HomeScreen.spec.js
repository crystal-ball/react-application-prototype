import React from 'react'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'

import configureStore from '@/dux/store'
import HomeScreen from './HomeScreen'

describe('<HomeScreen />', () => {
  test('When screen renders, then page title is included', () => {
    render(
      <Provider store={configureStore()}>
        <HomeScreen />
      </Provider>,
    )
    expect(screen.getByText(/Prototype application/))
  })
})
