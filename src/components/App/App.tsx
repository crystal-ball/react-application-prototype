import { getPathname, routeSwitch } from 'dux-routing'
import { Suspense, lazy } from 'react'
import { useSelector } from 'react-redux'

import { StackScreenLoader } from '@/components/StackScreen/StackScreenLoader'
import { routeDetails } from '@/config/routing'
import { Hero } from './Hero/Hero'
import { appGridCx } from './layout'

// --------------------------------------------------------
// App routing

const routeConfigs = [
  {
    route: routeDetails.home.path,
    component: lazy(() => import('@/components/HomeScreen/HomeScreen')),
  },
  {
    route: routeDetails.stack.path,
    component: StackScreenLoader,
  },
  {
    route: routeDetails.testing.path,
    component: lazy(() => import('@/components/TestingScreen/TestingScreen')),
  },
  {
    route: routeDetails.react.path,
    component: lazy(() => import('@/components/ReactScreen/ReactScreen')),
  },
  {
    route: routeDetails.layouts.path,
    component: lazy(() => import('@/components/LayoutsScreen/LayoutsScreen')),
  },
  {
    route: routeDetails.notFound.path,
    component: lazy(() => import('@/components/FourOhFourScreen/FourOhFourScreen')),
  },
]

/**
 * Application class component is responsible for setting the base application
 * behaviors and screen layouts+routing.
 */
export function App(): JSX.Element {
  const pathname = useSelector(getPathname)
  const { component: Screen, params } = routeSwitch(pathname, routeConfigs)

  return (
    <div className={appGridCx}>
      <Hero title='React Application Prototype' />
      <Suspense fallback={<div className='loading' />}>
        <Screen params={params} />
      </Suspense>
    </div>
  )
}
