import React from 'react'
import { node, object, string } from 'prop-types'
import { useDispatch } from 'react-redux'
import { Anchor } from 'componentry'

import { routeNavigated } from '@/dux/routing'

export default function Link({ children, to, searchParams, ...rest }) {
  const dispatch = useDispatch()

  return (
    <Anchor
      href={to}
      onClick={evt => {
        // Allow browser to handle clicks with special keys
        if (evt.altKey || evt.ctrlKey || evt.metaKey || evt.shiftKey) return

        evt.preventDefault()
        dispatch(routeNavigated({ pathname: to, searchParams }))
      }}
      {...rest}
    >
      {children}
    </Anchor>
  )
}
Link.displayName = 'Link'

Link.defaultProps = {
  searchParams: {},
}

Link.propTypes = {
  children: node.isRequired,
  to: string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  searchParams: object,
}
