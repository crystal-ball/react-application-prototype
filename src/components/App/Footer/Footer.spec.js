import React from 'react'
import { render } from '@testing-library/react'

import Footer from './Footer'
import { emotionWrapper } from '@/theme/emotion'

describe('<Footer />', () => {
  test('Footer snapshot', () => {
    const { container } = render(emotionWrapper(<Footer />))
    expect(container.firstChild).toMatchSnapshot()
  })
})
