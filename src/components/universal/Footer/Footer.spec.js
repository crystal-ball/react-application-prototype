import React from 'react'
import { render } from '@testing-library/react'

import Footer from './Footer'
import { emotionWrapper } from '@/theme/emotion'

describe('<Footer />', () => {
  // ℹ️ example of testing classes, attrs and styles
  test('The icon is an accessible pink font icon', () => {
    const { getByTestId } = render(emotionWrapper(<Footer />))
    const heartIcon = getByTestId('heart')
    expect(heartIcon).toHaveClass('icon icon-heart font')
    expect(heartIcon).toHaveAttribute('role', 'img')
    expect(heartIcon).toHaveStyle('color: #fcc4dd')
  })

  test('Footer snapshot', () => {
    const { container } = render(emotionWrapper(<Footer />))
    expect(container.firstChild).toMatchSnapshot()
  })
})
