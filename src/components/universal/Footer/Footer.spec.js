import React from 'react'
import { render } from '@testing-library/react'

import Footer from './Footer'
import { EmotionProvider } from '@/theme/emotion'

describe('<Footer />', () => {
  // ℹ️ example of testing classes, attrs and styles
  test('The icon is an accessible pink font icon', () => {
    const { getByTestId } = render(
      <EmotionProvider>
        <Footer />
      </EmotionProvider>,
    )
    const heartIcon = getByTestId('heart')
    expect(heartIcon).toHaveClass('icon icon-heart font')
    expect(heartIcon).toHaveAttribute('role', 'img')
    expect(heartIcon).toHaveStyle('color: #fcc4dd')
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
