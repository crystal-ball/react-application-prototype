import React, { useRef } from 'react'
import { arrayOf, func, object, oneOfType, shape, string } from 'prop-types'
import { useSelector } from 'react-redux'
import { pathToRegexp } from 'path-to-regexp'

import { getPathname } from '@/dux/routing'

export default function Switch({ routes, ...rest }) {
  const { current: regexRoutes } = useRef({})
  const pathname = useSelector(getPathname)

  routes.forEach(({ path }) => {
    if (!regexRoutes[path]) regexRoutes[path] = pathToRegexp(path)
  })

  const { component: Component } =
    routes.find(({ path }) => regexRoutes[path].exec(pathname)) ?? {}
  return Component ? <Component {...rest} /> : null
}

Switch.propTypes = {
  routes: arrayOf(
    shape({
      path: string.isRequired,
      component: oneOfType([func, object]).isRequired,
    }),
  ).isRequired,
}
