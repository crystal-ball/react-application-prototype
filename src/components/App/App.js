import React, { Suspense, lazy } from 'react'
import { useSelector } from 'react-redux'
import { hot } from 'react-hot-loader/root'
import { pathToRegexp } from 'path-to-regexp'

import FourOhFourScreen from '@/components/FourOhFourScreen/FourOhFourScreen'
import { Hero, ScreenContainer } from '@/components/universal'
import { getPathname } from '@/dux/routing'

// --------------------------------------------------------
// App routing

const homeRoute = {
  component: lazy(() =>
    import(/* webpackChunkName: "HomeScreen" */ '../HomeScreen/HomeScreen'),
  ),
  path: pathToRegexp('/'),
}

const stackRoute = {
  component: lazy(() =>
    import(/* webpackChunkName: "StackScreen" */ '../StackScreen/StackScreen'),
  ),
  path: pathToRegexp('/application-stack'),
}

const optimzationsRoute = {
  component: lazy(() =>
    import(
      /* webpackChunkName: "OptimizationsScreen" */ '../OptimizationsScreen/OptimizationsScreen'
    ),
  ),
  path: pathToRegexp('/optimizations'),
}

/**
 * Application class component is responsible for setting the base application
 * behaviors and screen layouts+routing.
 */
function App() {
  const pathname = useSelector(getPathname)

  let Screen
  if (homeRoute.path.exec(pathname)) Screen = homeRoute.component
  if (stackRoute.path.exec(pathname)) Screen = stackRoute.component
  if (optimzationsRoute.path.exec(pathname)) Screen = optimzationsRoute.component
  if (!Screen) Screen = FourOhFourScreen

  return (
    <>
      {/* Base container element with flexbox layout for sticky footers */}
      <div className='d-flex flex-column w-100 min-100vh'>
        <ScreenContainer direction='row'>
          <Hero />
          <Suspense fallback={<div className='loading' />}>
            <Screen />
          </Suspense>
        </ScreenContainer>
      </div>
    </>
  )
}
App.displayName = 'App'

export default hot(App)
