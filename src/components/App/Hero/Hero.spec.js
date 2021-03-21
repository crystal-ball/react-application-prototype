import { render, screen } from '@/utils/testing-library'
import { Hero } from './Hero'

describe('<Hero />', () => {
  it('Github icon links to repo Github url', () => {
    render(<Hero title='React Application Prototype' />)

    expect(screen.getByTestId('github-anchor')).toHaveAttribute(
      'href',
      'https://github.com/crystal-ball',
    )
  })
})
