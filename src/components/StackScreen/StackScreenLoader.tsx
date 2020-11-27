/**
 * Example of an entry to an async screen that fetches data while the screen is
 * being fetched for faster rendering.
 * @module
 */

import { lazy, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { fetchDependencies } from '@/api/dependencies'
import { updateDependencies } from '@/dux/dependencies'

const StackScreen = lazy(
  () => import(/* webpackChunkName: "StackScreen" */ '../StackScreen/StackScreen'),
)

export function StackScreenLoader(): JSX.Element {
  const dispatch = useDispatch()

  useEffect(
    function fetchAndUpdateDependencies() {
      async function initializeDependencies() {
        dispatch(updateDependencies(await fetchDependencies()))
      }

      initializeDependencies()
    },
    [dispatch],
  )

  return <StackScreen />
}
