import React from 'react'
import { render, screen } from '@testing-library/react'

import Footer from './Footer'

describe('<Footer />', () => {
  // ℹ️ example of testing classes, attrs and styles
  test('The icon is an accessible pink font icon', () => {
    render(<Footer />)

    const heartIcon = screen.getByTestId('heart')
    expect(heartIcon).toHaveClass('🅲-icon icon-heart')
    expect(heartIcon).toHaveAttribute('role', 'img')
    expect(heartIcon).toHaveStyle('stroke: ##a8ffdb')
  })

  test('Footer snapshot', () => {
    const { container } = render(<Footer />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
