/**
 * @jest-environment jsdom
 */

import userEvent from '@testing-library/user-event'
import * as reactRedux from 'react-redux'
import { render, screen } from '@/utils/testing-library'

import { Link } from './Link'

describe('<Link />', () => {
  it('When Link renders, it includes anchor class and href', () => {
    render(<Link to='/rad/route'>Test Link</Link>)

    expect(screen.getByText('Test Link')).toHaveAttribute('href', '/rad/route')
    expect(screen.getByText('Test Link')).toHaveClass('🅲-link link-primary')
  })

  it('When Link is clicked, then a routing action is dispatched', () => {
    const dispatchMock = jest.fn()
    jest.spyOn(reactRedux, 'useDispatch').mockImplementation(() => dispatchMock)

    render(
      <Link searchParams={{ rad: 'hecka' }} to='/rad/route'>
        Test Link
      </Link>,
    )

    userEvent.click(screen.getByText('Test Link'))

    expect(dispatchMock).toHaveBeenCalledWith({
      type: 'ROUTING/PATHNAME_UPDATED',
      payload: {
        method: 'pushState',
        pathname: '/rad/route',
        resetScroll: true,
        searchParams: { rad: 'hecka' },
      },
    })
  })
})
