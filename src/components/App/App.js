import React, { Suspense, lazy } from 'react'
import { useSelector } from 'react-redux'
import { hot } from 'react-hot-loader/root'
import { getPathname, routeSwitch } from 'dux-routing'

import { Hero, ScreenContainer } from '@/components/universal'
import { routes } from '@/config/routing'

// --------------------------------------------------------
// App routing

const routeConfigs = [
  {
    route: routes.home,
    component: lazy(() =>
      import(/* webpackChunkName: "HomeScreen" */ '../HomeScreen/HomeScreen'),
    ),
  },
  {
    route: routes.stack,
    component: lazy(() =>
      import(/* webpackChunkName: "StackScreen" */ '../StackScreen/StackScreen'),
    ),
  },
  {
    route: routes.notFound,
    component: lazy(() =>
      import(
        /* webpackChunkName: "FourOhFourScreen" */ '../FourOhFourScreen/FourOhFourScreen'
      ),
    ),
  },
]

/**
 * Application class component is responsible for setting the base application
 * behaviors and screen layouts+routing.
 */
function App() {
  const pathname = useSelector(getPathname)
  const { component: Screen, params } = routeSwitch(pathname, routeConfigs)

  return (
    <>
      {/* Base container element with flexbox layout for sticky footers */}
      <div className='d-flex flex-column w-100 min-100vh'>
        <ScreenContainer direction='row'>
          <Hero />
          <Suspense fallback={<div className='loading' />}>
            <Screen params={params} />
          </Suspense>
        </ScreenContainer>
      </div>
    </>
  )
}
App.displayName = 'App'

export default hot(App)
