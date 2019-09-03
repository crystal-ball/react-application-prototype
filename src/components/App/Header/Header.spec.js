import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import Header from './Header'

describe('<Header />', () => {
  test('When the app location is the home screen, then the header should return nothing', () => {
    const { queryByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>,
    )
    expect(queryByText('The Order of the Crystal Code Wizards')).toBe(null)
  })

  test('When the app location is not the home screen, then the header renders', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/best-practices']}>
        <Header />
      </MemoryRouter>,
    )
    expect(getByText('The Order of the Crystal Code Wizards'))
  })
})
