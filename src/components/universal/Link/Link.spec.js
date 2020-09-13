import React from 'react'
import * as reactRedux from 'react-redux'

import { createEvent, fireEvent, render, screen } from '@/utils/testing-library'
import Link from './Link'

describe('<Link />', () => {
  test('When Link renders, it includes anchor class and href', () => {
    render(<Link to='/rad/route'>Test Link</Link>)

    expect(screen.getByText('Test Link')).toHaveAttribute('href', '/rad/route')
    expect(screen.getByText('Test Link')).toHaveClass('a')
  })

  test('When Link is clicked, then defaults are prevented and routing action is dispatched', () => {
    const dispatchMock = jest.fn()
    jest.spyOn(reactRedux, 'useDispatch').mockImplementation(() => dispatchMock)

    render(
      <Link searchParams={{ rad: 'hecka' }} to='/rad/route'>
        Test Link
      </Link>,
    )

    const clickEvent = createEvent.click(screen.getByText('Test Link'))
    fireEvent(screen.getByText('Test Link'), clickEvent)

    expect(clickEvent.defaultPrevented).toBe(true)
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
