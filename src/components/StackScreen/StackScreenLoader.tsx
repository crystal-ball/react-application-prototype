/**
 * Example of an entry to an async screen that fetches data while the screen is
 * being fetched for faster rendering.
 * @module
 */

import { lazy, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { fetchPackages } from '@/api/packages'
import { updatePackages } from '@/dux/packages'

const StackScreen = lazy(
  () => import(/* webpackChunkName: "StackScreen" */ '../StackScreen/StackScreen'),
)

export function StackScreenLoader(): JSX.Element {
  const dispatch = useDispatch()

  useEffect(
    function fetchAndUpdatePackages() {
      async function initializePackages() {
        dispatch(updatePackages(await fetchPackages()))
      }

      initializePackages()
    },
    [dispatch],
  )

  return <StackScreen />
}
