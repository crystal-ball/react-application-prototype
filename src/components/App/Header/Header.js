import React from 'react'
import { useLocation } from 'react-router-dom'
import { Flex } from 'componentry'

// List of screens that should not have the shared application header rendered
const suppressHeaderLocations = ['/']

export default function Header() {
  const location = useLocation()

  // When the app is on a route that should not show the header bail out on
  // a render value
  if (suppressHeaderLocations.includes(location.pathname)) return null

  return (
    <Flex as='header' className='py-2' align='center' justify='center'>
      <h1 className='font-ornamental'>The Order of the Crystal Code Wizards</h1>
    </Flex>
  )
}
