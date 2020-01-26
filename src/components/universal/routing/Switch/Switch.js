import React from 'react'
import { arrayOf, func, object, oneOfType, shape, string } from 'prop-types'
import { useSelector } from 'react-redux'

import { getPathname } from '@/dux/routing'
import { matchRoute } from '@/utils/routing'

export default function Switch({ routes, ...rest }) {
  const pathname = useSelector(getPathname)

  const matched = routes.find(({ route }) => matchRoute(pathname, route))

  if (!matched) return null

  const { component: Component, route } = matched
  const matchDetails = matchRoute(pathname, route)

  return <Component {...matchDetails} {...rest} />
}

Switch.propTypes = {
  routes: arrayOf(
    shape({
      route: string.isRequired,
      component: oneOfType([func, object]).isRequired,
    }),
  ).isRequired,
}
