import { render, screen } from '@/utils/testing-library'
import FourOhFourScreen from './FourOhFourScreen'

describe('<FourOhFourScreen />', () => {
  test('When screen renders, then page title is included', () => {
    render(<FourOhFourScreen />)

    expect(screen.getByText('Introduction')).toHaveAttribute('href', '/')
    expect(screen.getByText('Application Stack')).toHaveAttribute(
      'href',
      '/application-stack',
    )
  })
})
