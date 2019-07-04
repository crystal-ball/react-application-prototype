import React from 'react'
import { useSelector } from 'react-redux'

import { selectRad } from '@/dux/app'

const RadState = () => {
  console.log('RadState rendered')
  const isRad = useSelector(selectRad)

  return <p>This app is {isRad ? 'rad' : 'pretty cool'}</p>
}

export default RadState
