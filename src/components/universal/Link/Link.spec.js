import React from 'react'
import * as reactRedux from 'react-redux' // eslint-disable-line import/no-namespace
import { createEvent, fireEvent, render } from '@testing-library/react'

import configureStore from '@/dux/store'
import Link from './Link'

const { Provider } = reactRedux

describe('<Link />', () => {
  test('When Link renders, it includes anchor class and href', () => {
    const { getByText } = render(
      <Provider store={configureStore()}>
        <Link to='/rad/route'>Test Link</Link>
      </Provider>,
    )

    expect(getByText('Test Link')).toHaveAttribute('href', '/rad/route')
    expect(getByText('Test Link')).toHaveClass('a')
  })

  test('When Link is clicked, then defaults are prevented and routing action is dispatched', () => {
    const dispatchMock = jest.fn()
    jest.spyOn(reactRedux, 'useDispatch').mockImplementation(() => dispatchMock)

    const { getByText } = render(
      <Provider store={configureStore()}>
        <Link searchParams={{ rad: 'hecka' }} to='/rad/route'>
          Test Link
        </Link>
      </Provider>,
    )

    const clickEvent = createEvent.click(getByText('Test Link'))
    fireEvent(getByText('Test Link'), clickEvent)

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
