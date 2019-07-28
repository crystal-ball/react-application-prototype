import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'componentry'

import { updateRad } from '@/dux/app'

const RadToggle = () => {
  console.log('RadToggle render')
  const dispatch = useDispatch()

  return (
    <div>
      <Button onClick={() => dispatch(updateRad())}>Toggle radness</Button>
    </div>
  )
}

export default RadToggle
