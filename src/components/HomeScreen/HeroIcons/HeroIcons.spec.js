import React from 'react'
import { render } from '@testing-library/react'

import HeroIcons from './HeroIcons'

describe('<HeroIcons />', () => {
  test('The icon is an accessible pink font icon', () => {
    const { getByTestId } = render(<HeroIcons />)
    expect(getByTestId('github-anchor')).toHaveAttribute(
      'href',
      'https://github.com/crystal-ball',
    )
  })
})
