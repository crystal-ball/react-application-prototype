import { Suspense, lazy } from 'react'
import { useSelector } from 'react-redux'
import { getPathname, routeSwitch } from 'dux-routing'

import { StackScreenLoader } from '@/components/StackScreen/StackScreenLoader'
import { routeDetails } from '@/config/routing'

import { Hero } from './Hero/Hero'
import layoutClasses from './layouts.css'

// --------------------------------------------------------
// App routing

const routeConfigs = [
  {
    route: routeDetails.home.path,
    component: lazy(
      () => import(/* webpackChunkName: "HomeScreen" */ '../HomeScreen/HomeScreen'),
    ),
  },
  {
    route: routeDetails.stack.path,
    component: StackScreenLoader,
  },
  {
    route: routeDetails.jest.path,
    component: lazy(
      () => import(/* webpackChunkName: "JestScreen" */ '../JestScreen/JestScreen'),
    ),
  },
  {
    route: routeDetails.react.path,
    component: lazy(
      () => import(/* webpackChunkName: "ReactScreen" */ '../ReactScreen/ReactScreen'),
    ),
  },
  {
    route: routeDetails.layouts.path,
    component: lazy(
      () =>
        import(/* webpackChunkName: "LayoutsScreen" */ '../LayoutsScreen/LayoutsScreen'),
    ),
  },
  {
    route: routeDetails.notFound.path,
    component: lazy(
      () =>
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
export function App(): JSX.Element {
  const pathname = useSelector(getPathname)
  const { component: Screen, params } = routeSwitch(pathname, routeConfigs)

  return (
    <div className={layoutClasses.app}>
      <Hero title='React Application Prototype' />
      <Suspense fallback={<div className='loading' />}>
        <Screen params={params} />
      </Suspense>
    </div>
  )
}
