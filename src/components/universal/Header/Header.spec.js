/**
 * @jest-environment jsdom
 */

import { render, screen } from '@/utils/testing-library'
import { Header } from './Header'

describe('<Header />', () => {
  it('When header renders, then links to pages are returned', () => {
    render(<Header />)

    expect(screen.getByText('Overview')).toHaveAttribute('href', '/')
    expect(screen.getByText('Application Stack')).toHaveAttribute(
      'href',
      '/application-stack',
    )
  })
})
