/* global global */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { Router, Link } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import ScrollToTop from './ScrollToTop'

describe('<ScrollToTop />', () => {
  test('When the app location changes, then scroll is updated', () => {
    global.scrollTo = jest.fn()
    const history = createMemoryHistory()
    history.push('/')

    const { getByText } = render(
      <Router history={history}>
        <ScrollToTop />
        <Link to='/best-practices'>Best Practices</Link>
        <Link to='/'>Home</Link>
      </Router>,
    )

    fireEvent.click(getByText('Best Practices'))
    fireEvent.click(getByText('Home'))

    // App should have been scrolled once on load and once for each route ∆
    expect(global.scrollTo).toHaveBeenCalledTimes(3)
  })
})
