/**
 * Example of an entry to an async screen that fetches data while the screen is
 * being fetched for faster rendering.
 * @module
 */

import { FC, lazy, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { packagesAPI } from '@/api/packages'
import { updatePackages } from '@/dux/packages'

const StackScreen = lazy(
  () => import(/* webpackChunkName: "StackScreen" */ '../StackScreen/StackScreen'),
)

export const StackScreenLoader: FC = () => {
  const dispatch = useDispatch()

  useEffect(
    function fetchAndUpdatePackages() {
      async function initializePackages() {
        dispatch(updatePackages(await packagesAPI.fetchPackages()))
      }

      initializePackages()
    },
    [dispatch],
  )

  return <StackScreen />
}
