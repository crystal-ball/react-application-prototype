/**
 * @jest-environment jsdom
 */

import { render, screen } from '@/utils/testing-library'
import HomeScreen from './HomeScreen'

describe('<HomeScreen />', () => {
  it('When screen renders, then page title is included', () => {
    render(<HomeScreen />)

    expect(screen.getByText(/Prototype application/)).toBeInTheDocument()
  })
})
