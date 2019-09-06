import React from 'react'
import { render } from '@testing-library/react'

import Footer from './Footer'

describe('<Footer />', () => {
  test('Footer snapshot', () => {
    const { container } = render(<Footer />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
