import React from 'react'
import { render, screen } from '@testing-library/react'

import { EmotionProvider } from '@/theme/emotion'
import Footer from './Footer'

describe('<Footer />', () => {
  // ℹ️ example of testing classes, attrs and styles
  test('The icon is an accessible pink font icon', () => {
    render(
      <EmotionProvider>
        <Footer />
      </EmotionProvider>,
    )
    const heartIcon = screen.getByTestId('heart')
    expect(heartIcon).toHaveClass('icon icon-heart')
    expect(heartIcon).toHaveAttribute('role', 'img')
    expect(heartIcon).toHaveStyle('stroke: ##a8ffdb')
  })

  test('Footer snapshot', () => {
    const { container } = render(
      <EmotionProvider>
        <Footer />
      </EmotionProvider>,
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
