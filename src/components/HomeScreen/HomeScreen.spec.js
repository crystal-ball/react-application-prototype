import React from 'react'

import { render, screen } from '@/utils/testing-library'
import HomeScreen from './HomeScreen'

describe('<HomeScreen />', () => {
  test('When screen renders, then page title is included', () => {
    render(<HomeScreen />)

    expect(screen.getByText(/Prototype application/))
  })
})
