import { render, screen } from '@/utils/testing-library'
import StackScreen from './StackScreen'

describe('<StackScreen />', () => {
  it('When screen renders, then page title is included', () => {
    render(<StackScreen />)

    expect(screen.getByText('Application Stack')).toBeInTheDocument()
  })
})
