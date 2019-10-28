import React from 'react'
import { render } from '@testing-library/react'

import Hero from './Hero'

describe('<Hero />', () => {
  test('Github icon links to repo Github url', () => {
    const { getByTestId } = render(<Hero />)
    expect(getByTestId('github-anchor')).toHaveAttribute(
      'href',
      'https://github.com/crystal-ball',
    )
  })
})
