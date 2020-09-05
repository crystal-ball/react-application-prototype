import React, { Suspense, lazy } from 'react'
import { useSelector } from 'react-redux'
import { hot } from 'react-hot-loader/root'
import { getPathname, routeSwitch } from 'dux-routing'

import { Hero } from '@/components/universal'
import { routes } from '@/config/routing'

import './app.scss' // eslint-disable-line import/no-unassigned-import

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
    <div className='app-layout'>
      <Hero />
      <Suspense fallback={<div className='loading' />}>
        <Screen params={params} />
      </Suspense>
    </div>
  )
}

export default hot(App)
